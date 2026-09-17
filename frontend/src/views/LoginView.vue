<template>
  <div
	class="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat p-6"
	style="background-image: url('/bg-desktop.jpg')"
  >
	<div class="w-full max-w-[400px]">

	  <!-- Header -->
	  <div class="mb-8 text-center">
		<div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/50 text-primary-contrast">
		  <i class="pi pi-lock text-xl"></i>
		</div>

		<h1 class="text-2xl font-semibold text-surface-100">
		  Welcome back
		</h1>

		<p class="mt-2 text-sm text-surface-400">
		  Sign in to continue
		</p>
	  </div>

	  <!-- Card -->
	  <div class="rounded-xl bg-surface-0 p-6 shadow-lg">
		<form @submit.prevent="login" class="flex flex-col gap-4">

		  <!-- Email -->
		  <InputGroup>
			<InputGroupAddon class="bg-surface-50 border-surface-300">
			  <i class="pi pi-envelope"></i>
			</InputGroupAddon>
			<InputText
			  v-model="email"
			  type="email"
			  placeholder="Email address"
			  autocomplete="email"
			  class="w-full bg-surface-50 text-surface-900 border-surface-300"
			  size="small"
			  fluid
			/>
		  </InputGroup>

		  <!-- Password -->
		  <InputGroup>
			<InputGroupAddon class="bg-surface-50 border-surface-300">
			  <i class="pi pi-key"></i>
			</InputGroupAddon>
			<Password
			  v-model="password"
			  placeholder="Password"
			  autocomplete="current-password"
			  :feedback="false"
			  toggle-mask
			  class="w-full bg-surface-50 text-surface-900 border-surface-300"
			  size="small"
			  fluid
			/>
		  </InputGroup>

		  <!-- Login -->
		  <Button
			type="submit"
			label="Login"
			icon="pi pi-sign-in"
			:loading="loading"
			size="small"
			fluid
		  />
		</form>
	  </div>

	  <p class="mt-6 text-center text-xs text-surface-400">
		© {{ new Date().getFullYear() }} elmyrockers.github.io
	  </p>
	</div>
  </div>
</template>

<script setup lang="ts">
import InputGroup from 'primevue/inputgroup'
import InputGroupAddon from 'primevue/inputgroupaddon'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
</script>