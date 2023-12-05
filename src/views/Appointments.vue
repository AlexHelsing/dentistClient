<template>
    <div class="flex h-screen flex-col md:flex-row flex-1 justify-center gap-6 bg-white  px-6 py-9 lg:px-8 lg:py-12">
        <div class="flex justify-center">
            <DatePicker v-model="date"></DatePicker> 
        </div>
           
        <div class="flex flex-col w-full lg:w-1/2 bg-gray-100 rounded-md overflow-y-auto p-4">
            <div class="flex flex-row w-full justify-between">
                <h3 class="text-gray-900 justify-top mb-4">Appointments:</h3>
                <button @click="showModal = true" type="button" class=" rounded-md border-0 ring-1 text-sm font-semibold text-gray-900 ring-indigo-600 bg-indigo-300 hover:bg-indigo-500 p-1 m-1">Create +</button>
            </div>
            
            <div class="flex flex-wrap w-full gap-4 mt-4">
                <div v-for="appointment in appointments" class="flex flex-shrink-0 flex-wrap items-center leading-6 gap-3 ring-1 ring-gray-500 text-gray-900 bg-gray-300 rounded-md px-2 py-1">
                    <p class="flex-shrink-0">time: {{ appointment.dateTime.getHours() }}:{{ appointment.dateTime.getMinutes() }}</p>
                    <p class="flex-shrink-0" v-if="appointment.isBooked">status: booked</p>
                    <p class="flex-shrink-0" v-else>status: not booked</p>
                    <button v-if="appointment.isBooked" @click="cancelAppointment" type="button" class="text-sm font-semibold rounded-md border-0 ring-1 ring-red-700 bg-red-500 hover:bg-red-400 p-1">Cancel</button>
                </div>
            </div>
            
            <!-- Main modal -->
            <div v-show="showModal" class="overflow-y-auto absolute inset-0 z-50 flex items-center justify-center bg-gray-700 bg-opacity-50">
                <div class="relative p-4 w-full max-w-md max-h-full">
                    <!-- Modal content -->
                    <div class="relative bg-white rounded-lg shadow">
                        <!-- Modal header -->
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
                            <h3 class="text-lg font-semibold text-gray-900">Create new appointment</h3>
                            <button @click="showModal = false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <form class="p-4 md:p-5" @submit="createAppointment">
                            <div class="grid gap-4 mb-4 grid-cols-1">
                                <div class="col-span-2">
                                    <label for="time" class="block text-sm font-medium leading-6 text-gray-900">Time</label>
                                    
                                    <div class="flex flex-row gap-6">
                                        <input v-model="hour" id="time" type="number" required placeholder="hour" class="block h-9 bg-gray-300 w-full ring-1 ring-gray-500 rounded-md border-0 p-1.5 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400 sm:text-sm">
                                        <input v-model="hour" id="time" type="number" required placeholder="minute" class="block h-9 bg-gray-300 w-full ring-1 ring-gray-500 rounded-md border-0 p-1.5 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400 sm:text-sm">
                                    </div>
                                    
                                </div>

                                <div class="flex justify-center items-center">
                                    <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                                       <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                                       Add new appointment
                                    </button>
                                </div>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
    
</template>

<script lang="ts">
import { DatePicker } from "v-calendar"
import 'v-calendar/style.css'
import { defineComponent } from 'vue'

interface Appointment {
    dateTime: Date;
    isBooked: boolean;
}

export default defineComponent({
    components: {
        DatePicker
    },
    data() {
        const sampleAppointments: Appointment[] = [
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: false },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: false },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: true },
          { dateTime: new Date(), isBooked: true },
        ];
        return{
            date: new Date(),
            appointments: sampleAppointments,
            showModal: false, 
            hour: '',
            minute: '',   
        };
    },
    methods: {
        cancelAppointment () {

        },
        createAppointment () {

        }
    }
});
</script>

<style>

</style>