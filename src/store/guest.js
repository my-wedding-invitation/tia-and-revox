import { defineStore } from 'pinia'
import { guest } from '@/api'

export const useGuestStore = defineStore('guest', {
    state: () => ({
        guests: []
    }),
    actions: {
        async create(payload) {
            const data = await guest.create(payload)
            if (data) {
                this.guests.push(data)
                return Promise.resolve(data)
            }
            return Promise.resolve(false)
        },
        async read() {
            try {
                const data = await guest.read()
                if (data) this.guests = data
            } catch (e) {}
        },
        async update(uuid, payload) {
            const data = await guest.update(uuid, payload)
            if (data) {
                const guests = [...this.guests]
                const index = guests.findIndex(guest => guest.uuid === uuid)
                guests[index] = data
                this.guests = guests
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        },
        async remove(uuid) {
            const error = await guest.remove(uuid)
            if (!error) {
                let guests = [...this.guests]
                guests = guests.filter(guest => guest.uuid !== uuid)
                this.guests = guests
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        }
    }
})