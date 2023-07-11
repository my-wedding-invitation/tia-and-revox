import { defineStore } from 'pinia'
import { reservation } from '@/api'

export const useReservationStore = defineStore('reservation', {
    state: () => ({
        reservations: []
    }),
    actions: {
        async create(payload) {
            const data = await reservation.create(payload)
            if (data) {
                this.reservations.push(data)
                return Promise.resolve(data)
            }
            return Promise.resolve(false)
        },
        async read() {
            try {
                const data = await reservation.read()
                if (data) this.reservations = data
            } catch (e) {}
        },
        async update(uuid, payload) {
            const data = await reservation.update(uuid, payload)
            if (data) {
                const reservations = [...this.reservations]
                const index = reservations.findIndex(reservation => reservation.uuid === uuid)
                reservations[index] = data
                this.reservations = reservations
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        },
        async remove(uuid) {
            const error = await reservation.remove(uuid)
            if (!error) {
                let reservations = [...this.reservations]
                reservations = reservations.filter(reservation => reservation.uuid !== uuid)
                this.reservations = reservations
                return Promise.resolve(true)
            }
            return Promise.resolve(false)
        }
    }
})