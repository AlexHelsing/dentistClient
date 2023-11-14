<template>
    <div class="flex h-screen flex-1 flex-col justify-center bg-white px-6 py-9 lg:py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm md:max-w-xl">
            <div class="flex flex-row justify-center">
                <img class="mr-1 h-12 w-12" src="../assets/tooth.svg" alt="Your Company Logo" />
                <h2 class="text-2xl font-bold text-gray-900">Dentist App</h2>
            </div>
          
          <h2 class="mt-10 text-center text-xl font-bold text-gray-900">Log in to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-xl">
            <form class="space-y-6" @submit="login">
                <div>
                  <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                  <div class="mt-2">
                    <input v-model="email" id="email" type="email" class="block h-9 bg-gray-300 w-full ring-1 ring-gray-500 rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-400 sm:text-sm" />
                  </div>
                </div>

                <div>
                  <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                    <div class="text-sm">
                      <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                    </div>
                  </div>
                  <div class="mt-2">
                    <input v-model="password" id="password" type="password" class="block h-9 bg-gray-300 w-full ring-1 ring-gray-500 rounded-md border-0 py-1.5 text-gray-900 shadow-sm focus:outline-none placeholder:text-gray-40" />
                  </div>
                </div>

                <div>
                  <button type="submit" class="flex h-9 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">Sign in</button>
                </div>
            </form>

            <div class="relative my-6">
                <div class="absolute inset-0 flex items-center">
                    <div class="w-full border-t border-gray-300"></div>
                </div>
                <div class="relative flex justify-center text-sm">
                    <span class="px-2 bg-white text-gray-500">OR</span>
                </div>
            </div>

            <button @="goToSignup" type="button" class="flex pb-1 h-9 w-full bg-white ring-1 ring-indigo-600 text-gray-900 w-full justify-center items-center shadow-sm rounded-md text-sm font-semibold hover:bg-indigo-50">Sign up</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const email = ref('');
const password = ref('');

function login(){

}

function goToSignup(){

}
</script>

<style>

</style>