<script setup>
import {
  BCard,
  BCardHeader,
  BCardBody,
  BRow,
  BCol
} from 'bootstrap-vue-next';
import TextEditor from '@/components/UiKits/Editor/TextEditor.vue';
</script>

<template>
  <div>
    <b-card class="mb-4" no-body>
      <b-card-header>
        <h5 class="mb-0">Ticket Details</h5>
      </b-card-header>
      <b-card-body>
        <div class="ticket-details-content">
          <div class="mb-3">
            <h6>Ticket Id</h6>
            <p class="text-secondary f-s-16">AR 2044 - Bug Report</p>
          </div>
          <div class="mb-3">
            <h6>Ticket Description</h6>
            <p class="text-secondary">
              When attempting to send an email with attachments through the
              system, the attachments are not included in the outgoing email.
              The expected behavior is for all selected attachments to be sent
              along with the email content.
            </p>
          </div>
        </div>
      </b-card-body>
    </b-card>

    <b-card no-body>
      <b-card-header>
        <h5 class="mb-0">Comments</h5>
      </b-card-header>
      <b-card-body no-body>
        <div class="ticket-comment-box mb-4">
          <div class="d-flex justify-content-between position-relative flex-wrap">
            <div class="h-45 w-45 d-flex-center b-r-50 bg-success overflow-hidden position-absolute">
              <img
                  src="/images/avatar/12.png"
                  alt="Avatar"
                  class="img-fluid"
              />
            </div>

            <div class="flex-grow-1 ps-2 pe-2 ms-5">
              <h6 class="mb-0">Gavin Cortez</h6>
              <p class="text-muted f-s-14">
                to Danny Amacher danny@capacity.com
              </p>
              <p class="text-dark mb-3">
                More detailed steps if you have found a different way or
                additional conditions under which the bug occurs.
              </p>
            </div>

            <div class="ms-5">
              <p>Feb 9, 2022 10:31 AM</p>
            </div>
          </div>

          <b-row class="d-flex flex-wrap ms-5 mt-3">
            <b-col sm="6" md="4" class="mb-3">
              <div class="ticket-details-comment p-3 w-100 border rounded">
                <h6 class="mb-0 txt-ellipsis-1">Screenshot png</h6>
                <p class="mb-0 text-secondary">16 June 2022, 1.30pm</p>
              </div>
            </b-col>
            <b-col sm="6" md="4">
              <div class="ticket-details-comment p-3 w-100 border rounded">
                <h6 class="mb-0 txt-ellipsis-1">Screen_shot.png</h6>
                <p class="mb-0 text-secondary">16 June 2022, 1.30pm</p>
              </div>
            </b-col>
          </b-row>
        </div>

        <div class="ticket-comment-box mb-3">
          <div class="d-flex justify-content-between position-relative flex-wrap">
            <div class="h-45 w-45 d-flex-center b-r-50 bg-primary overflow-hidden position-absolute">
              <img
                  src="/images/avatar/11.png"
                  alt="Avatar"
                  class="img-fluid"
              />
            </div>
            <div class="flex-grow-1 ps-2 pe-2 ms-5">
              <h6 class="mb-0">Allian Horman</h6>
              <p class="text-muted f-s-14">
                to Danny Amacher danny@capacity.com
              </p>
              <p class="text-dark mb-3">
                Thanks for flagging this issue! I was able to reproduce the
                bug following the steps you outlined.
              </p>
            </div>

            <div>
              <p>Feb 9, 2022 10:31 AM</p>
            </div>
          </div>
        </div>
      </b-card-body>
    </b-card>

    <b-card no-body>
      <b-card-header>
        <h5 class="mb-0">Leave a Note</h5>
      </b-card-header>
      <b-card-body>
        <TextEditor />
      </b-card-body>
    </b-card>
  </div>
</template>



