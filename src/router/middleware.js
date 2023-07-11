export default async function auth({ to, from, next, router }) {
    const access = 'Mpt2T@Q!#ly13.y31T1jao'
    if (to.path.indexOf('/admin') > -1) {
        if (localStorage.getItem('access') != access) {
            window.location.href = `${window.location.origin}/access`
            return
        }
    } else if (to.path.indexOf('/access') > -1) {
        if (localStorage.getItem('access') == access) {
            window.location.href = `${window.location.origin}/admin`
            return
        }
    }
    return next()
}