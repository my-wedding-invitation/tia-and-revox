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
                    <div class="col-sm-8">
                        <div class="form-group mb-0">
                            <input type="text" v-model="table.filters.main.value" class="form-control"
                                placeholder="Masukan Kata Kunci">
                        </div>
                    </div>
                    <div class="col-sm-2">
                        <select class="form-control" v-model="sent">
                            <option value="">Semua</option>
                            <option value="1">Sudah Dikirim</option>
                            <option value="0">Belum Dikirim</option>
                        </select>
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
                                    <v-table ref="table" :data="filteredGuests" :filters="table.filters"
                                        :currentPage.sync="table.page" :pageSize="table.size"
                                        @totalPagesChanged="table.total = $event" selectedClass="table-warning"
                                        @selectionChanged="handleClickGuest" class="table table-striped table-bordered">
                                        <thead slot="head">
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Account</th>
                                            <th>Sent</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody slot="body" slot-scope="{displayData}">
                                            <v-tr v-for="row in displayData" :key="row.id" :row="row"
                                                v-if="displayData.length">
                                                <td>{{ row.name }}</td>
                                                <td>{{ row.phone }}</td>
                                                <td>{{ row.account }}</td>
                                                <td>{{ row.sent ? 'Yes' : 'No' }}</td>
                                                <td class="text-center">
                                                    <button class="btn btn-default mr-2">
                                                        <i class="fa fa-chain" title="Copy Link" @click="copyLink(row)"></i>
                                                    </button>
                                                    <button class="btn btn-default">
                                                        <i :class="`fa fa-${row.sent ? 'close' : 'check'}`" :title="row.sent ? 'Unconfirm Sent' : 'Confirm Sent'" @click="confirmSent(row)"></i>
                                                    </button>
                                                </td>
                                            </v-tr>
                                            <v-tr v-if="displayData.length === 0" :row="{}">
                                                <td colspan="5" class="text-center">There's No Data</td>
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
                                    <label>Url</label>
                                    <input type="text" class="form-control" v-model="url" disabled>
                                </div>
                                <div class="col-lg-6">
                                    <label>Slug</label>
                                    <input type="text" class="form-control" v-model="guest.slug" disabled>
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
import slug from 'slug'
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
        sent: '',
        url: `${window.location.origin}/`,
        guest: {
            uuid: '',
            name: '',
            slug: '',
            phone: '',
            account: '',
            sent: false
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
        filteredGuests() {
            return this.guests.filter(guest => this.sent != '' ? guest.sent == this.sent : true)
        }
    },
    watch: {
        'guest.name': function (val) {
            const guestSlug = slug(val, { lower: false })
            const exists = this.guests.find(guest => guest.slug === guestSlug)
            if (exists) {
                this.guest.slug = `${guestSlug}-${Math.floor(Math.random() * 1000)}`
            } else {
                this.guest.slug = guestSlug
            }
        }
    },
    methods: {
        ...mapActions(useGuestStore, ['create', 'read', 'update', 'remove']),
        handleAddGuest() {
            this.guest = {
                uuid: '',
                name: '',
                slug: '',
                phone: '',
                account: '',
                sent: false
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
                        .then((resp) => {
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
        },
        copyLink(guest) {
            const link = `${this.url}?to=${guest.slug}`
            const tempInput = document.createElement('input')
            document.body.appendChild(tempInput)
            tempInput.setAttribute('value', link)
            tempInput.select()
            document.execCommand('copy')
            document.body.removeChild(tempInput)
        },
        confirmSent(guest) {
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
                    vm.update(guest.uuid, { sent: !guest.sent })
                        .then((resp) => {
                            vm.$Simplert.open({
                                title: '',
                                message: `Konfirmasi ${resp ? 'Berhasil' : 'Gagal'}`,
                                type: '',
                                customCloseBtnClass: 'btn btn-success',
                                customCloseBtnText: 'Close'
                            })
                        })
                }
            })
        },
    },
}
</script>