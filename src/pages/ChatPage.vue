<template>
  <div class="q-pa-md row justify-center chat__content">
    <div class="chat_content--list-message" ref="chat_content">
      <ChatItem
        v-for="chatItem in messageList"
        :key="chatItem"
        v-bind="chatItem"
      />
    </div>

    <q-form @submit="sendMessage" class="input__send-message">
      <label for="choose_file"
        ><q-icon name="image" class="choose_file--icon" size="32px"
      /></label>
      <input
        class="input__send-message--input-choosefile"
        type="file"
        id="choose_file"
        :value="files"
        :multiple="false"
        :onchange="getFiles"
      />
      <q-input
        filled
        v-model="textContent"
        label="Nhập nội dung"
        class="input__send-message--input"
        autogrow
      />
      <q-btn label="Gửi" type="submit" color="primary" />
    </q-form>
  </div>
</template>

<script>
import {
  defineComponent,
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  watch,
  computed,
} from "vue";
import moment from "moment";
import ChatItem from "components/ChatItem.vue";
import { useSocketIo } from "boot/socket";
import { api } from "boot/axios";
import { useStore } from "vuex";
import { uploadImage } from "../utils/uploadFirebase";

moment.locale("vi");

const sendData = {
  room_id: localStorage.getItem("roomId"),
  sender_id: JSON.parse(localStorage.getItem("user") || "{}")?.id,
  message: "",
};

export default defineComponent({
  name: "ChatPage",
  components: {
    ChatItem,
  },
  setup() {
    const textContent = ref(null);
    const chat_content = ref(null);
    const socket = useSocketIo();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const messageList = ref([]);
    const typing = ref(false);
    const store = useStore();
    const files = ref(null);
    const roomId = computed(() => {
      return store.state.chat.roomId;
    });

    socket.on("connect", function () {
      console.log(`client connection done..... ${socket.id}`);
      socket.emit("setRoomId", roomId.value || localStorage.getItem("roomId"));
    });

    socket.on("send-message", (lastMessage) => {
      messageList.value = [
        ...messageList.value,
        {
          userId: lastMessage.user_id,
          message: lastMessage.message,
          createdAt: lastMessage.stamp,
          roomId: lastMessage.roomId,
          sender_id: false,
        },
      ];
    });

    socket.on("typing", (data) => {
      console.log(data, "typing");
      typing.value = data;
    });

    socket.on("stopTyping", () => {
      typing.value = false;
    });

    window.onbeforeunload = () => {
      socket.emit("leave", socket.id);
    };

    const scrollToBottom = () => {
      if (!chat_content.value) return;
      const scrollArea = chat_content.value;
      scrollArea.scrollTop = scrollArea.scrollHeight;
      scrollArea.scrollIntoView({ behavior: "smooth", block: "end" });
    };

    onBeforeMount(() => {
      socket.connect();
    });

    onMounted(async () => {
      scrollToBottom();
    });

    onUpdated(() => {
      scrollToBottom();
    });

    onUnmounted(() => {
      socket.emit("leave", socket.id);
      socket.disconnect();
      console.log("unmounted!");
    });

    watch(textContent, (textContent, _) => {
      textContent ? socket.emit("typing", user?.id) : socket.emit("stopTyping");
    });

    watch(roomId, async (roomId, _) => {
      if (!roomId) return;
      localStorage.setItem("roomId", roomId);
      const { data } = await api.get(`/room/${roomId}`);
      messageList.value = data.map((e) => ({
        ...e,
        message: [e.message],
        stamp: moment(e?.createdAt || new Date())
          .fromNow()
          .toString(),
        sender_id: user?.uid == e.uid,
      }));
    });

    return {
      messageList,
      textContent,
      chat_content,
      files,
      getFiles(e) {
        const uploadFile = async (data) => {
          const downloadURL = await uploadImage(
            `chat/message_room_${localStorage.getItem(
              "roomId"
            )}/${Date.now()}.jpg`,
            data
          );
          socket.emit("send-message", {
            message: [],
            user_id: user?.id,
            avatar: user?.avatar,
            file: downloadURL,
          });

          messageList.value.push({
            ...sendData,
            message: [],
            stamp: moment(new Date()).fromNow().toString(),
            file: downloadURL,
            avatar: user?.avatar,
            sender_id: true,
          });
        };
        uploadFile(e.target.files[0]);
        e.target.files = null;
      },
      sendMessage() {
        if (!textContent.value) return;
        socket.emit("send-message", {
          message: [textContent.value],
          user_id: user?.id,
          avatar: user?.avatar,
          file: "",
        });

        messageList.value.push({
          ...sendData,
          message: [textContent.value],
          stamp: moment(new Date()).fromNow().toString(),
          avatar: user?.avatar,
          sender_id: true,
          file: "",
        });
        textContent.value = null;
      },
    };
  },
});
</script>
