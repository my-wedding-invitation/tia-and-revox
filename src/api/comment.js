export default function(api) {
    return {
        async read() {
            const { data } = await api
                .from('comments')
                .select()
            return data
        },
        async create(comment) {
            const { data } = await api
                .from('comments')
                .insert(comment)
                .select()
            return data.length ? data[0] : {}
        },
        async update(uuid, comment) {
            const { data } = await api
                .from('comments')
                .update(comment)
                .where('uuid', uuid)
                .select()
            return data.length ? data[0] : {}
        },
        async remove(uuid) {
            const { error } = await supabase
                .from('comments')
                .delete()
                .where('uuid', uuid)
            return error
        }
    }
}