<template>
    <app-fragment>
        <div class="row border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Comment</h2>
                <ol class="breadcrumb">
                    <router-link tag="li" to="/" class="breadcrumb-item">
                        <a href="#">Home</a>
                    </router-link>
                    <router-link tag="li" to="/comment" class="breadcrumb-item">
                        <strong>Comment</strong>
                    </router-link>
                </ol>
            </div>
        </div>
        <div class="wrapper wrapper-content animated fadeInRight">
            <div class="ibox-content m-b-sm border-bottom">
                <div class="row">
                    <div class="col-sm-10">
                        <div class="form-group mb-0">
                            <input type="text" v-model="table.filters.main.value" class="form-control"
                                placeholder="Masukan Kata Kunci">
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <div class="d-flex justify-content-around">
                            <button class="btn btn-primary" @click="handleAddComment">
                                <i class="fa fa-plus"></i>
                            </button>
                            <button class="btn btn-warning" @click="handleEditComment" :disabled="!selected">
                                <i class="fa fa-pencil"></i>
                            </button>
                            <button class="btn btn-danger" @click="handleDeleteComment" :disabled="!selected">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="ibox">
                        <div class="ibox-content pb-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <v-table ref="table" :data="guestComments" :filters="table.filters"
                                        :currentPage.sync="table.page" :pageSize="table.size"
                                        @totalPagesChanged="table.total = $event" selectedClass="table-warning"
                                        @selectionChanged="handleClickComment" class="table table-striped table-bordered">
                                        <thead slot="head">
                                            <th>Name</th>
                                            <th>Content</th>
                                        </thead>
                                        <tbody slot="body" slot-scope="{displayData}">
                                            <v-tr v-for="row in displayData" :key="row.id" :row="row"
                                                v-if="displayData.length">
                                                <td>{{ row.name }}</td>
                                                <td>{{ row.content }}</td>
                                            </v-tr>
                                            <v-tr v-if="displayData.length === 0" :row="{}">
                                                <td colspan="2" class="text-center">There's No Data</td>
                                            </v-tr>
                                        </tbody>
                                    </v-table>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12">
                                    <smart-pagination :currentPage.sync="table.page" :totalPages="table.total"
                                        :hideSinglePage="false" :maxPageLinks="3" class="float-right" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div ref="modal" class="modal inmodal fade" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span aria-hidden="true">&times;</span>
                            <span class="sr-only">Close</span>
                        </button>
                        <h4 class="modal-title" id="title">Comment</h4>
                        <small style="padding-right: 2rem;">Please Complete Field</small>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>Name</label>
                                    <select class="form-control" v-model="comment.uuid" :disabled="edit">
                                        <option v-for="guest in filteredGuests" :value="guest.uuid">{{ guest.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>Content</label>
                                    <textarea class="form-control" v-model="comment.content"></textarea>    
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-white w-25" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary w-25" data-dismiss="modal"
                            @click="handleClickSave">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    </app-fragment>
</template>
<script>
import cloneDeep from 'lodash/cloneDeep'
import { Fragment } from 'vue-fragment'
import { mapActions, mapState } from 'pinia'
import { useGuestStore } from '@/store/guest'
import { useCommentStore } from '@/store/comment'

export default {
    name: 'comment',
    components: {
        'app-fragment': Fragment
    },
    created() {
        Promise.all([
            this.readGuest(),
            this.readComment()
        ])
    },
    data: () => ({
        selected: null,
        edit: false,
        comment: {
            uuid: '',
            content: ''
        },
        table: {
            page: 1,
            size: 10,
            total: 0,
            filters: {
                main: {
                    value: '',
                    keys: ['name', 'content']
                },
            }
        }
    }),
    computed: {
        ...mapState(useGuestStore, ['guests']),
        ...mapState(useCommentStore, ['comments']),
        guestComments() {
            if (!this.comments.length || !this.guests.length) return []
            return this.comments.map(comment => {
                const { name } = this.guests.find(guest => guest.uuid === comment.uuid)
                return {
                    ...comment,
                    name
                }
            })
        },
        filteredGuests() {
            if (!this.guests.length) return []
            if (this.edit) return this.guests
            return this.guests.filter(guest => {
                return !this.comments.find(comment => comment.uuid === guest.uuid)
            })
        },
    },
    methods: {
        ...mapActions(useGuestStore, { readGuest: 'read' }),
        ...mapActions(useCommentStore, {
            readComment: 'read',
            createComment: 'create',
            updateComment: 'update',
            removeComment: 'remove'
        }),
        handleAddComment() {
            this.edit = false
            this.comment = {
                uuid: '',
                content: ''
            }
            $(this.$refs.modal).modal('show')
        },
        handleClickComment(comments) {
            if (comments.length) {
                this.selected = comments[0]
            } else {
                this.selected = null
            }
        },
        handleEditComment() {
            this.edit = true
            this.comment = cloneDeep(this.selected)
            delete this.comment.name
            $(this.$refs.modal).modal('show')
        },
        async handleClickSave() {
            const payload = cloneDeep(this.comment)
            if (this.edit) {
                const uuid = payload.uuid
                delete payload.uuid
                const success = await this.updateComment(uuid, payload)
                this.$Simplert.open({
                    title: '',
                    message: `Ubah Data ${success ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            } else {
                const comment = await this.createComment(payload)
                this.$Simplert.open({
                    title: '',
                    message: `Buat Data ${comment ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            }
            this.selected = null
        },
        handleDeleteComment() {
            const vm = this
            this.$Simplert.open({
                title: '',
                message: 'Apakah Kamu Yakin?',
                type: '',
                useConfirmBtn: true,
                customCloseBtnText: 'Tidak',
                customCloseBtnClass: 'btn btn-white',
                customConfirmBtnText: 'Iya',
                customConfirmBtnClass: 'btn btn-danger',
                onConfirm() {
                    vm.removeComment(vm.selected.uuid)
                        .then(() => {
                            vm.$Simplert.open({
                                title: '',
                                message: `Hapus Data ${resp.indexOf(false) === -1 ? 'Berhasil' : 'Gagal'}`,
                                type: '',
                                customCloseBtnClass: 'btn btn-success',
                                customCloseBtnText: 'Close'
                            })
                        })
                }
            })
        }
    }
}
</script>