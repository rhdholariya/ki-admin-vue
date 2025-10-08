<script setup>
import {
    BForm,
    BFormGroup,
    BFormInput,
    BButton,
    BRow,
    BCol,
} from "bootstrap-vue-next";
</script>
<template>
    <b-form class="app-form">
        <b-row>
            <b-col md="12" class="mb-4">
                <b-form-group label="Cardholder Name" label-for="cardholderName">
                    <b-form-input id="cardholderName" type="text" required />
                </b-form-group>
            </b-col>

            <b-col md="6" class="mb-4">
                <b-form-group label="Card Number" label-for="cardNumber">
                    <b-form-input
                        id="cardNumber"
                        type="text"
                        placeholder="xxxx-xxxx-xxxx-xxx"
                        required
                    />
                </b-form-group>
            </b-col>

            <b-col md="3" class="mb-4">
                <b-form-group label="Expiration" label-for="expiration">
                    <b-form-input
                        id="expiration"
                        type="text"
                        placeholder="MM/YY"
                        required
                    />
                </b-form-group>
            </b-col>

            <b-col md="3" class="mb-4">
                <b-form-group label="CVC code" label-for="cvcCode">
                    <b-form-input
                        id="cvcCode"
                        type="text"
                        placeholder="xxx"
                        required
                    />
                </b-form-group>
            </b-col>

            <b-col md="12" class="text-end mt-2">
                <b-button variant="primary" type="submit">Submit</b-button>
            </b-col>
        </b-row>
    </b-form>
</template>


