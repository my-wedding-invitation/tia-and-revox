<template>
    <app-fragment>
        <div class="row border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>Reservation</h2>
                <ol class="breadcrumb">
                    <router-link tag="li" to="/" class="breadcrumb-item">
                        <a href="#">Home</a>
                    </router-link>
                    <router-link tag="li" to="/reservation" class="breadcrumb-item">
                        <strong>Reservation</strong>
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
                            <button class="btn btn-primary" @click="handleAddReservation">
                                <i class="fa fa-plus"></i>
                            </button>
                            <button class="btn btn-warning" @click="handleEditReservation" :disabled="!selected">
                                <i class="fa fa-pencil"></i>
                            </button>
                            <button class="btn btn-danger" @click="handleDeleteReservation" :disabled="!selected">
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
                                    <v-table ref="table" :data="guestReservations" :filters="table.filters"
                                        :currentPage.sync="table.page" :pageSize="table.size"
                                        @totalPagesChanged="table.total = $event" selectedClass="table-warning"
                                        @selectionChanged="handleClickReservation" class="table table-striped table-bordered">
                                        <thead slot="head">
                                            <th>Name</th>
                                            <th>Number</th>
                                            <th>Present</th>
                                        </thead>
                                        <tbody slot="body" slot-scope="{displayData}">
                                            <v-tr v-for="row in displayData" :key="row.id" :row="row"
                                                v-if="displayData.length">
                                                <td>{{ row.name }}</td>
                                                <td>{{ row.count }}</td>
                                                <td>{{ row.present ? 'Yes' : 'No' }}</td>
                                            </v-tr>
                                            <v-tr v-if="displayData.length === 0" :row="{}">
                                                <td colspan="3" class="text-center">There's No Data</td>
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
                        <h4 class="modal-title" id="title">Reservation</h4>
                        <small style="padding-right: 2rem;">Please Complete Field</small>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group row">
                                <div class="col-lg-12">
                                    <label>Name</label>
                                    <select class="form-control" v-model="reservation.uuid" :disabled="edit">
                                        <option v-for="guest in filteredGuests" :value="guest.uuid">{{ guest.name }}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="hr-line-dashed"></div>
                            <div class="form-group row">
                                <div class="col-lg-6">
                                    <label>Number</label>
                                    <input type="number" class="form-control" v-model="reservation.count">
                                </div>
                                <div class="col-lg-6">
                                    <label>Present</label>
                                    <select class="form-control" v-model="reservation.present">
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                    </select>
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
import { useReservationStore } from '@/store/reservation'

export default {
    name: 'reservation',
    components: {
        'app-fragment': Fragment
    },
    created() {
        Promise.all([
            this.readGuest(),
            this.readReservation()
        ])
    },
    data: () => ({
        selected: null,
        edit: false,
        reservation: {
            uuid: '',
            count: '',
            present: 'Yes'
        },
        table: {
            page: 1,
            size: 10,
            total: 0,
            filters: {
                main: {
                    value: '',
                    keys: ['name', 'count', 'present']
                },
            }
        }
    }),
    computed: {
        ...mapState(useGuestStore, ['guests']),
        ...mapState(useReservationStore, ['reservations']),
        guestReservations() {
            if (!this.reservations.length || !this.guests.length) return []
            return this.reservations.map(reservation => {
                const { name } = this.guests.find(guest => guest.uuid === reservation.uuid)
                return {
                    ...reservation,
                    name,
                }
            })
        },
        filteredGuests() {
            if (!this.guests.length) return []
            if (this.edit) return this.guests
            return this.guests.filter(guest => {
                return !this.reservations.find(reservation => reservation.uuid === guest.uuid)
            })
        },
    },
    methods: {
        ...mapActions(useGuestStore, { readGuest: 'read' }),
        ...mapActions(useReservationStore, {
            readReservation: 'read',
            createReservation: 'create',
            updateReservation: 'update',
            removeReservation: 'remove'
        }),
        handleAddReservation() {
            this.edit = false
            this.reservation = {
                uuid: '',
                count: '',
                present: 'Yes'
            }
            $(this.$refs.modal).modal('show')
        },
        handleClickReservation(reservations) {
            if (reservations.length) {
                this.selected = reservations[0]
            } else {
                this.selected = null
            }
        },
        handleEditReservation() {
            this.edit = true
            this.reservation = cloneDeep(this.selected)
            delete this.reservation.name
            $(this.$refs.modal).modal('show')
        },
        async handleClickSave() {
            const payload = cloneDeep(this.reservation)
            if (this.edit) {
                const uuid = payload.uuid
                delete payload.uuid
                const success = await this.updateReservation(uuid, payload)
                this.$Simplert.open({
                    title: '',
                    message: `Ubah Data ${success ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            } else {
                const reservation = await this.createReservation(payload)
                this.$Simplert.open({
                    title: '',
                    message: `Buat Data ${reservation ? 'Berhasil' : 'Gagal'}`,
                    type: '',
                    customCloseBtnClass: 'btn btn-success',
                    customCloseBtnText: 'Close'
                })
            }
            this.selected = null
        },
        handleDeleteReservation() {
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
                    vm.removeReservation(vm.selected.uuid)
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
        }
    }
}
</script>