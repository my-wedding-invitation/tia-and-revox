export default function(api) {
    return {
        async read() {
            const { data } = await api
                .from('reservations')
                .select()
            return data
        },
        async uuid(uuid) {
            const { data } = await api
                .from('reservations')
                .select()
                .eq('uuid', uuid)
            return data.length ? data[0] : {}
        },
        async create(reservation) {
            const { data } = await api
                .from('reservations')
                .insert(reservation)
                .select()
            return data.length ? data[0] : {}
        },
        async update(uuid, reservation) {
            const { data } = await api
                .from('reservations')
                .update(reservation)
                .eq('uuid', uuid)
                .select()
            return data.length ? data[0] : {}
        },
        async remove(uuid) {
            const { error } = await api
                .from('reservations')
                .delete()
                .eq('uuid', uuid)
            return error
        }
    }
}