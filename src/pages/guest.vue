<template>
    <app-fragment>
        <div class="row border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Guest</h2>
                <ol class="breadcrumb">
                    <router-link tag="li" to="/" class="breadcrumb-item">
                        <a href="#">Home</a>
                    </router-link>
                    <router-link tag="li" to="/guest" class="breadcrumb-item">
                        <strong>Guest</strong>
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
                            <button class="btn btn-primary" @click="handleAddGuest">
                                <i class="fa fa-plus"></i>
                            </button>
                            <button class="btn btn-warning" @click="handleEditGuest" :disabled="!selected">
                                <i class="fa fa-pencil"></i>
                            </button>
                            <button class="btn btn-danger" @click="handleDeleteGuest" :disabled="!selected">
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
                                    <v-table ref="table" :data="guests" :filters="table.filters"
                                        :currentPage.sync="table.page" :pageSize="table.size"
                                        @totalPagesChanged="table.total = $event" selectedClass="table-warning"
                                        @selectionChanged="handleClickGuest" class="table table-striped table-bordered">
                                        <thead slot="head">
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Account</th>
                                        </thead>
                                        <tbody slot="body" slot-scope="{displayData}">
                                            <v-tr v-for="row in displayData" :key="row.id" :row="row"
                                                v-if="displayData.length">
                                                <td>{{ row.name }}</td>
                                                <td>{{ row.phone }}</td>
                                                <td>{{ row.account }}</td>
                                            </v-tr>
                                            <v-tr v-if="displayData.length === 0" :row="{}">
                                                <td colspan="4" class="text-center">There's No Data</td>
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
                        <h4 class="modal-title" id="title">Guest</h4>
                        <small style="padding-right: 2rem;">Please Complete Field</small>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>Name</label>
                                    <input type="text" class="form-control" v-model="guest.name">
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group row">
                                <div class="col-lg-6">
                                    <label>Phone</label>
                                    <input type="text" class="form-control" v-model="guest.phone">
                                </div>
                                <div class="col-lg-6">
                                    <label>Account</label>
                                    <input type="text" class="form-control" v-model="guest.account">
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

export default {
    name: 'guest',
    components: {
        'app-fragment': Fragment
    },
    created() {
        this.read()
    },
    data: () => ({
        selected: null,
        guest: {
            uuid: '',
            name: '',
            phone: '',
            account: ''
        },
        table: {
            page: 1,
            size: 10,
            total: 0,
            filters: {
                main: {
                    value: '',
                    keys: ['name', 'phone', 'account']
                },
            }
        }
    }),
    computed: {
        ...mapState(useGuestStore, ['guests']),
    },
    methods: {
        ...mapActions(useGuestStore, ['create', 'read', 'update', 'remove']),
        handleAddGuest() {
            this.guest = {
                uuid: '',
                name: '',
                phone: '',
                account: ''
            }
            $(this.$refs.modal).modal('show')
        },
        handleClickGuest(guests) {
            if (guests.length) {
                this.selected = guests[0]
            } else {
                this.selected = null
            }
        },
        handleEditGuest() {
            this.guest = cloneDeep(this.selected)
            $(this.$refs.modal).modal('show')
        },
        async handleClickSave() {
            const payload = cloneDeep(this.guest)
            const uuid = payload.uuid
            delete payload.uuid
            if (uuid) {
                const success = await this.update(uuid, payload)
                this.$Simplert.open({
                    title: '',
                    message: `Ubah Data ${success ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            } else {
                const guest = await this.create(payload)
                this.$Simplert.open({
                    title: '',
                    message: `Buat Data ${guest ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            }
            this.selected = null
        },
        handleDeleteGuest() {
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
                    vm.remove(vm.selected.uuid)
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