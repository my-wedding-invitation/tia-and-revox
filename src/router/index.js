import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/router/middleware'

import guest from '@/pages/guest.vue'
import comment from '@/pages/comment.vue'
import reservation from '@/pages/reservation.vue'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Landing',
            component: () => import('@/pages/landing.vue'),
        },
        {
            path: '/access',
            name: 'Access',
            component: () => import('@/pages/access.vue'),
            meta: {
                middleware: auth
            }
        },
        {
            path: '/admin',
            name: 'Beranda',
            component: () => import('@/layout/admin.vue'),
            children: [
                {
                    path: '',
                    name: '',
                    component: guest,
                    meta: {
                        middleware: auth
                    }
                },
                {
                    path: 'comment',
                    name: 'comment',
                    component: comment,
                    meta: {
                        middleware: auth
                    }
                },
                {
                    path: 'reservation',
                    name: 'reservation',
                    component: reservation,
                    meta: {
                        middleware: auth
                    }
                }
            ]
        },
        {
            path: '/signin',
            name: 'signin',
            component: () => import('@/pages/signin.vue')
        },
    ],
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        return {
            x: 0,
            y: 0,
            behavior: 'smooth'
        }
    }
})

function nextFactory(context, middleware, index) {
    const subsequentMiddleware = middleware[index]
    if (!subsequentMiddleware) return context.next
    return (...parameters) => {
        context.next(...parameters)
        const nextMiddleware = nextFactory(context, middleware, index + 1)
        subsequentMiddleware({ ...context, next: nextMiddleware })
    }
}

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = Array.isArray(to.meta.middleware)
            ? to.meta.middleware
            : [to.meta.middleware]
        const context = {
            from,
            next,
            router,
            to,
        }
        const nextMiddleware = nextFactory(context, middleware, 1)
        return middleware[0]({ ...context, next: nextMiddleware })
    }
    return next()
})

export default router