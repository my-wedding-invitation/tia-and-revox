import { defineStore } from 'pinia'
import { comment } from '@/api'

export const useCommentStore = defineStore('comment', {
    state: () => ({
        comments: []
    }),
    actions: {
        async create(payload) {
            const data = await comment.create(payload)
            if (data) {
                this.comments.push(data)
                return Promise.resolve(data)
            }
            return Promise.resolve(false)
        },
        async read() {
            try {
                const data = await comment.read()
                if (data) this.comments = data
            } catch (e) {}
        },
        async update(uuid, payload) {
            const data = await comment.update(uuid, payload)
            if (data) {
                const comments = [...this.comments]
                const index = comments.findIndex(comment => comment.uuid === uuid)
                comments[index] = data
                this.comments = comments
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        },
        async remove(uuid) {
            const error = await comment.remove(uuid)
            if (!error) {
                let comments = [...this.comments]
                comments = comments.filter(comment => comment.uuid !== uuid)
                this.comments = comments
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        }
    }
})