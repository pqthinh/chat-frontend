<template>
  <q-item class="chat__item-friend" clickable @click="createRoom">
    <q-item-section avatar>
      <q-avatar>
        <img :src="avatar" />
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-weight-bold">{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
import { defineComponent } from "vue";
import { useQuasar } from "quasar";
import { api } from "boot/axios";

export default defineComponent({
  name: "FriendList",
  props: {
    id: {
      default: 0,
    },
    uid: {
      type: String,
    },
    name: {
      type: String,
      default: "Thinhpqs",
    },
    avatar: {
      type: String,
      default: "https://cdn.quasar.dev/img/avatar3.jpg",
    },
  },
  setup(props, ctx) {
    const $q = useQuasar();
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    const createRoom = async () => {
      const { id } = user;
      const res = await api.post("/chat/create-room", {
        uid: id,
        listUser: [props?.id],
      });
      const { roomId } = res;
      if (roomId) localStorage.setItem("roomId", roomId);
      else
        $q.notify({
          color: "red-4",
          textColor: "white",
          icon: "cloud_done",
          message: "Login failed",
        });
    };
    return {
      createRoom,
    };
  },
});
</script>
