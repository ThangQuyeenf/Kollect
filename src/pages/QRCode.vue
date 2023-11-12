
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
            scanResult: null,
            data: null,
            liff_id: '2001602140-y3gZ0PPj',
            isScanResult: false
        };
    },
    methods: {
        async scanCode() {
            liff.scanCodeV2()
                .then(result => {
                    // Process the result, which contains the QR code data
                    const qrCodeData = result.value;
                    this.scanResult = qrCodeData;
                    this.isScanResult = true
                    console.log("Scanned QR code data: " + qrCodeData);
                })
                .catch(error => {
                    // Handle any errors that occur during the scanning process
                    alert(error)
                    console.error("Error scanning QR code: " + error);
                });
        }
    },
    async created() {
        liff.init({ liffId: '2001602140-y3gZ0PPj' })
        if(!liff.isLoggedIn()){
            await liff.login()
        }
    }
};
</script>
  