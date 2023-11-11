
<template>
    <v-container class="mt-4">
        <v-btn @click="scanCode" rounded color="primary">Quét mã QR</v-btn>
        <div v-if="scanResult">Kết quả quét: {{ scanResult }}</div>
    </v-container>
</template>
  
<script>
import liff from '@line/liff'
export default {
    name: "QRCodePage",
    data() {
        return {
            scanResult: null
        };
    },
    methods: {
        scanCode() {
            liff.init({ liffId: '2001602140-y3gZ0PPj' }, () => {
                alert(liff.isInClient())
                if (liff.isInClient()) {
                    liff.scanCodeV2().then(result => {
                        this.scanResult = result.value;
                    });
                } else {
                    alert('Ứng dụng phải được mở trong LINE để sử dụng tính năng quét mã QR');
                }
            });
        }
    },
};
</script>
  