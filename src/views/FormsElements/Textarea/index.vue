<script setup>
import { ref } from "vue";
import { BContainer, BRow, BCol, BCard, BCardHeader, BCardBody, BForm, BFormTextarea, BFormFloatingLabel, BButton } from "bootstrap-vue-next";
import AppLayout from "@/views/AppLayout.vue";
import { PhCardholder } from "@phosphor-icons/vue";
import Breadcrumb from "@/components/Breadcrumb/Breadcrumb.vue";


const writeText = ref("");
const writeOutput = ref("");
const myText = ref("");
const myOutput = ref("");


const handleWriteChange = () => {
  writeOutput.value = writeText.value.toUpperCase(); // Example formatting logic
};

const handleSubmit = (e) => {
  e.preventDefault();
  myOutput.value = myText.value.trim();
};

const breadcrumbItems = {
  title: "Textarea",
  items: [
    { label: "Form element", icon: PhCardholder },
    { label: "Textarea", active: true },
  ],
};
</script>

<template>
  <app-layout>
    <main>
      <b-container fluid>
        <breadcrumb :breadcrumb="breadcrumbItems" />

        <b-row>
          <!-- Basic Textarea -->
          <b-col cols="12">
            <b-card no-body>
              <b-card-header><h5>Basic Textarea</h5></b-card-header>
              <b-card-body>
                <b-row>
                  <b-col md="6">
                    <b-form class="app-form">
                      <label for="textareaexample" class="form-label">Simple textarea</label>
                      <b-form-textarea
                          id="textareaexample"
                          placeholder="Some text..."
                          rows="2"
                      />
                    </b-form>
                  </b-col>

                  <b-col md="6">
                    <b-form class="app-form">
                      <label class="form-label">Floating textarea</label>
                      <b-form-floating-label>
                        <b-form-textarea
                            id="floatingTextarea2"
                            placeholder="Type Your Address"
                        />
                        <label for="floatingTextarea2">Address</label>
                      </b-form-floating-label>
                    </b-form>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Horizontal Textarea -->
          <b-col cols="12">
            <b-card no-body>
              <b-card-header><h5>Horizontal Textarea</h5></b-card-header>
              <b-card-body>
                <b-form class="app-form">
                  <b-row class="mb-3">
                    <b-col sm="4" lg="2">
                      <label for="textareaexample1" class="form-label">Small Textarea</label>
                    </b-col>
                    <b-col sm="8" lg="10">
                      <b-form-textarea
                          id="textareaexample1"
                          placeholder="Some text..."
                          rows="1"
                      />
                    </b-col>
                  </b-row>

                  <b-row class="mb-3">
                    <b-col sm="4" lg="2">
                      <label for="textareaexample2">Default Textarea</label>
                    </b-col>
                    <b-col sm="8" lg="10">
                      <b-form-textarea
                          id="textareaexample2"
                          placeholder="Some text..."
                      />
                    </b-col>
                  </b-row>

                  <b-row>
                    <b-col sm="4" lg="2">
                      <label for="textareaexample3">Large Textarea</label>
                    </b-col>
                    <b-col sm="8" lg="10">
                      <b-form-textarea
                          id="textareaexample3"
                          placeholder="Some text..."
                          rows="6"
                      />
                    </b-col>
                  </b-row>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Textarea With States -->
          <b-col cols="12">
            <b-card no-body>
              <b-card-header><h5>Textarea With States</h5></b-card-header>
              <b-card-body>
                <b-row>
                  <b-col cols="12">
                    <b-form class="app-form was-validated">
                      <div class="mb-3">
                        <label for="validationTextarea" class="form-label">Textarea</label>
                        <b-form-textarea
                            id="validationTextarea"
                            placeholder="Required example textarea"
                            required
                        />
                        <div class="invalid-feedback">
                          Please enter a message in the textarea.
                        </div>
                      </div>
                    </b-form>
                  </b-col>

                  <b-col cols="12">
                    <b-form class="app-form was-validated">
                      <div>
                        <label for="validationTextarea1" class="form-label">Textarea</label>
                        <b-form-textarea
                            id="validationTextarea1"
                            placeholder="Required example textarea"
                            class="is-valid"
                        />
                        <div class="invalid-feedback">
                          Please enter a message in the textarea.
                        </div>
                      </div>
                    </b-form>
                  </b-col>
                </b-row>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Textarea Formatter -->
          <b-col cols="12">
            <b-card no-body>
              <b-card-header><h5>Textarea Formatter</h5></b-card-header>
              <b-card-body>
                <b-form class="app-form">
                  <div class="mb-3">
                    <b-form-textarea
                        id="write-textarea"
                        placeholder="write some text.."
                        v-model="writeText"
                        @input="handleWriteChange"
                    />
                  </div>
                  <div class="form-control h-40">{{ writeOutput }}</div>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>

          <!-- Custom Textarea Formatter -->
          <b-col cols="12">
            <b-card no-body>
              <b-card-header><h5>Custom Textarea Formatter</h5></b-card-header>
              <b-card-body>
                <b-form class="app-form" @submit="handleSubmit">
                  <div class="mb-3">
                    <b-form-textarea
                        id="myTextarea"
                        placeholder="write some text.."
                        v-model="myText"
                    />
                  </div>
                  <div class="mb-3">
                    <b-button type="submit" variant="primary">Submit Code</b-button>
                  </div>
                  <div class="form-control h-40">{{ myOutput }}</div>
                </b-form>
              </b-card-body>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </main>
  </app-layout>
</template>
