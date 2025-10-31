<script setup>
import { BRow, BCol, BContainer } from 'bootstrap-vue-next'
import SweetAlertCard from '@/components/AdvanceUi/SweatAlert/SweetAlertCard.vue'
import { sweetAlertData } from '@/data/advanceui/sweat-alert/SweatAlert.js'
import AppLayout from '@/views/AppLayout.vue'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb.vue'
import { PhBriefcase } from '@phosphor-icons/vue'
import Swal from 'sweetalert2'

// ✅ Handle SweetAlert events
const handleClick = async (type) => {
  switch (type) {
    case 'click_1':
      Swal.fire({
        title: 'Any Fool Can Use a Computer',
        customClass: { confirmButton: 'btn btn-primary' },
        buttonsStyling: false
      })
      break

    case 'click_2':
      Swal.fire('The Internet?', 'That thing is still around?', 'question')
      break

    case 'click_3':
      Swal.fire('Good job!', 'You clicked the button!', 'success')
      break

    case 'click_4':
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      break

    case 'click_5':
      Swal.fire({
        title: 'Custom animation with Animate.css',
        showClass: { popup: 'animate__animated animate__fadeInDown' },
        hideClass: { popup: 'animate__animated animate__fadeOutUp' }
      })
      break

    case 'click_6':
      Swal.fire({
        title: 'Sweet!',
        text: 'Modal with a custom image.',
        imageUrl: '/assets/images/blog/21.jpg',
        imageWidth: 400,
        imageHeight: 400,
        imageAlt: 'Custom image'
      })
      break

    case 'click_7':
      Swal.fire({
        title: 'Submit your Github username',
        input: 'text',
        inputAttributes: { autocapitalize: 'off' },
        showCancelButton: true,
        confirmButtonText: 'Look up',
        showLoaderOnConfirm: true,
        preConfirm: async (login) => {
          try {
            const response = await fetch(`https://api.github.com/users/${login}`)
            if (!response.ok) throw new Error(response.statusText)
            return response.json()
          } catch (error) {
            Swal.showValidationMessage(`Request failed: ${error}`)
            return null
          }
        },
        allowOutsideClick: () => !Swal.isLoading()
      }).then((result) => {
        if (result.isConfirmed && result.value) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url
          })
        }
      })
      break

    case 'click_8':
      Swal.fire({
        title: 'How old are you?',
        icon: 'question',
        input: 'range',
        inputLabel: 'Your age',
        inputAttributes: { min: 8, max: 120, step: 1 },
        inputValue: 25
      })
      break

    case 'click_9': {
      let timerInterval
      Swal.fire({
        title: 'Auto close alert!',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            if (b) b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => clearInterval(timerInterval)
      })
      break
    }

    case 'click_10':
      Swal.fire({
        title: '<strong>Welcome</strong>',
        html: 'Start Multipurpose, clean modern responsive bootstrap 5 admin template',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Great!',
        confirmButtonAriaLabel: 'Thumbs up, great!',
        cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
        cancelButtonAriaLabel: 'Thumbs down'
      })
      break

    case 'click_11':
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
        }
      })
      break

    case 'click_12': {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-primary ms-2',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })

      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
          )
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
              'Cancelled',
              'Your imaginary file is safe :)',
              'error'
          )
        }
      })
      break
    }

    case 'click_13':
      Swal.fire({
        title: 'Sweet!',
        text: 'Custom width, padding, background..'
      })
      break

    case 'click_14': {
      const ipAPI = '//api.ipify.org?format=json'
      const inputValue = await fetch(ipAPI)
          .then((r) => r.json())
          .then((data) => data.ip)

      const {value: ipAddress} = await Swal.fire({
        title: 'Enter your IP address',
        input: 'text',
        inputLabel: 'Your IP address',
        inputValue,
        showCancelButton: true,
        inputValidator: (value) => {
          if (!value) return 'You need to write something!'
          return null
        }
      })

      if (ipAddress) {
        Swal.fire(`Your IP address is ${ipAddress}`)
      }
      break
    }

    case 'click_15':
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      break

    case 'click_16': {
      const Toast = Swal.mixin({
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Signed in successfully'
      })
      break
    }

    default:
      break
  }
}

// ✅ Breadcrumb data
const breadcrumbItems = {
  title: 'Sweat Alert',
  items: [
    {label: 'Advance UI', icon: PhBriefcase},
    {label: 'Sweat Alert', active: true}
  ]
}
</script>

<template>
  <AppLayout>
    <main>
      <b-container fluid>
        <Breadcrumb :breadcrumb="breadcrumbItems"/>
        <b-row>
          <b-col
              v-for="(card, index) in sweetAlertData"
              :key="index"
              sm="12"
              md="6"
              xl="4"
          >
            <SweetAlertCard
                :title="card.title"
                :description="card.description"
                :color="card.color"
                @click="handleClick(card.description)"
            />
          </b-col>
        </b-row>
      </b-container>
    </main>
  </AppLayout>
</template>
