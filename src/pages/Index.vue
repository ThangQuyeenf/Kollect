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
            <div class="text-center mt-4">
                <v-btn color="primary" rounded elevated outlined @click="toQRCode">
                    QR Camera V2
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
        async openCamera() {
            window.location = 'https://line.me/R/nv/QRCodeReader'
            await liff.init({ liffId: '2001602140-y3gZ0PPj' })
            const queryString = decodeURIComponent(window.location.search)
            const params = new URLSearchParams(queryString)
            alert (params)
            if (params.get('param') !== null) {
                alert(params)
                this.data = params.get('param')
                this.isScanResult = true
            }
            console.log('Open Camera')
            console.log(this.liff_id)
        },
        toQRCode() {
            this.$router.push('/qrcode')
        }
    },
    async main() {

    },
    async created() {
        liff.init({ liffId: '2001602140-y3gZ0PPj' })
        if(!liff.isLoggedIn()){
            await liff.login({ redirectUri: "https://kollect-one.vercel.app" })
        }
    },
}
</script>

<style scoped></style>