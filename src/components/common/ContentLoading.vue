<template>
  <div >
    <v-row>
      <v-col class="mx-auto" cols="auto">
        <fulfilling-bouncing-circle-spinner
          :animation-duration="1500"
          :size="size"
          :color="primaryColor"
        />
      </v-col>
    </v-row>
    <div class="text-center my-1 primary--text">{{text}}</div>
  </div>
</template>

<script>
import { FulfillingBouncingCircleSpinner } from "epic-spinners";
import style from "@/mixins/style";

export default {
  name: "ContentLoading",
  mixins: [style],
  props: {
    size: {
      type: Number,
      default: 35,
    },
    text: {
      type: String,
      default: "ロード中..."
    }
  },
  components: { FulfillingBouncingCircleSpinner },
};
</script>

<style></style>
