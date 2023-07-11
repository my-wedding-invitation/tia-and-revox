export default function(api) {
    return {
        async read() {
            const { data } = await api
                .from('guests')
                .select()
            return data
        },
        async create(guest) {
            const { data } = await api
                .from('guests')
                .insert(guest)
                .select()
            return data.length ? data[0] : {}
        },
        async update(uuid, guest) {
            const { data } = await api
                .from('guests')
                .update(guest)
                .eq('uuid', uuid)
                .select()
            return data.length ? data[0] : {}
        },
        async remove(uuid) {
            const { error } = await supabase
                .from('guests')
                .delete()
                .eq('uuid', uuid)
            return error
        }
    }
}