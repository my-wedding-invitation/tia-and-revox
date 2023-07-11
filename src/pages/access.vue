<template>
    <div class="gray-bg h-100">
        <div class="middle-box text-center loginscreen animated fadeInDown">
        <div>
            <h3>Selamat Datang</h3>
            <p>Silahkan Masukan Kata Sandi</p>
            <form class="m-t" role="form" action="" @submit.prevent="onSubmit">
                <div class="form-group">
                    <input type="password" class="form-control" placeholder="Kata Sandi" required="" v-model="password">
                </div>
                <button type="submit" class="btn btn-primary block full-width m-b">Masuk</button>
            </form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Landing',
    data: () => ({
        password: ''
    }),
    mounted() {
        const body = document.querySelector('body')
        body.classList.add('landing-page')
        body.classList.add('no-skin-config')
    },
    methods: {
        onSubmit(e) {
            if (this.password == 'Mpt2T@Q!#ly13.y31T1jao') {
                localStorage.setItem('access', 'Mpt2T@Q!#ly13.y31T1jao')
                window.location.href = `${window.location.origin}/admin`
            }
        }
    }
}
</script>
<style>
</style>