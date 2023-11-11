<template>
    <v-container class="d-flex justify-center">
        <div>
            <div class="text-center mt-4">
                <h1>Kollect</h1>
            </div>
            <div>
                <img src="../assets/logo.png" alt="logo">
            </div>
            <div class="text-center mt-4">
                <v-btn color="primary" rounded elevated outlined @click="openCamera">
                    Open Camera
                </v-btn>
            </div>
            <div v-if="isScanResult"> {{ data }}</div>
        </div>
    </v-container>
</template>

<script>
/* eslint-disable */
import liff from "@line/liff";

export default {
    name: "IndexPage",
    data() {
        return {
            data: null,
            liff_id: '2001602140-y3gZ0PPj',
            isScanResult: false
        }
    },
    methods: {
        openCamera() {
            const liffid = '2001602140-y3gZ0PPj'
            liff.init({ liffId: '2001602140-y3gZ0PPj' })
            console.log(liff.isLoggedIn())
            if (!liff.isLoggedIn()) {
                liff.login()
            }
            console.log('Open Camera')
            console.log(this.liff_id)
            // Check if the LIFF API is available
            if (liff.scanCodeV2) {
                // Open the camera to scan a QR code
                liff.scanCodeV2()
                    .then(result => {
                        // Process the result, which contains the QR code data
                        const qrCodeData = result.value;
                        this.data = qrCodeData;
                        this.isScanResult = true
                        console.log("Scanned QR code data: " + qrCodeData);
                    })
                    .catch(error => {
                        // Handle any errors that occur during the scanning process
                        console.error("Error scanning QR code: " + error);
                    });
            } else {
                // Handle the case when LIFF API is not available
                console.log("LIFF API is not available");
            }

        }
    },

    async created() {

    },
}
</script>

<style scoped></style>