<script setup>
import Navbar from '../components/MainNavbar.vue'
</script>

<template>
  <Navbar />
  <main>
    <!-- Start of Hero Header -->
    <section class="bg-gray-200 w-full mb-4">
      <div class="container p-10">
        <h1 class="text-4xl">Home</h1>
      </div>
    </section>
    <!-- End of Hero Header -->

    <!-- Start of Consultation list -->
    <section class="consultation-section mb-5">
      <div class="section-header mb-3 ml-4">
        <h4 class="section-title text-gray-700">My Consultation</h4>
      </div>
      <div class="flex flex-wrap">
        <div class="md:w-1/3 pr-4 pl-4">
          <div
            class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-default"
          >
            <div class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900">
              <h5 class="mb-0">Consultation</h5>
            </div>
            <div class="flex-auto p-6 text-teal-700">
              <router-link to="/consult">+ Request consultation</router-link>
            </div>
          </div>
        </div>

        <div class="md:w-1/3 pr-4 pl-4">
          <div
            class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-default"
          >
            <div
              class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 border-0"
            >
              <h5 class="mb-0">Consultation</h5>
            </div>
            <div class="flex-auto p-6">
              <table class="w-full max-w-full mb-4 bg-transparent table-striped">
                <tr>
                  <th>Status</th>
                  <td>
                    <span
                      class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-green-500 text-white hover:bg-green-600"
                      >Succes</span
                    >
                  </td>
                </tr>
                <tr>
                  <th>Disease History</th>
                  <td class="text-gray-700">Lorem</td>
                </tr>
                <tr>
                  <th>Current Symptoms</th>
                  <td class="text-gray-700">Ipsum</td>
                </tr>
                <tr>
                  <th>Doctor Name</th>
                  <td class="text-gray-700">Dolor</td>
                </tr>
                <tr>
                  <th>Doctor Notes</th>
                  <td class="text-gray-700">Sit Amet</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End of Consultation list -->

    <!-- Start of Vaccination list -->
    <section class="consultation-section mb-5">
      <div class="section-header mb-3 ml-4">
        <h4 class="section-title text-gray-700">My Vaccinations</h4>
      </div>
      <div class="section-body">
        <div class="flex flex-wrap mb-4">
          <!-- S: First Vaccination info -->
          <div class="md:w-full pr-4 pl-4">
            <div
              class="relative px-3 py-3 mb-4 border rounded bg-orange-200 border-orange-300 text-orange-800"
            >
              Your consultation must be approved by doctor to get the vaccine.
            </div>
          </div>
          <!-- E: First Vaccination info -->

          <!-- S: First Vaccination Box (Done) -->
          <div class="md:w-1/3 pr-4 pl-4">
            <div
              class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-default"
            >
              <div
                class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 border-0"
              >
                <h5 class="mb-0">First Vaccination</h5>
              </div>
              <div class="flex-auto p-6 ">
                <table class="w-full max-w-full mb-4 bg-transparent table-striped">
                  <tr>
                    <th>Status</th>
                    <td>
                      <span
                        class="inline-block p-1 text-center font-semibold text-sm align-baseline leading-none rounded bg-blue-500 text-white hover:bg-blue-600"
                        >Pending</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Date</th>
                    <td class="text-gray-700">-</td>
                  </tr>
                  <tr>
                    <th>Spot</th>
                    <td class="text-gray-700">Lorem</td>
                  </tr>
                  <tr>
                    <th>Vaccine</th>
                    <td class="text-gray-700">Ipsum</td>
                  </tr>
                  <tr>
                    <th>Vaccinator</th>
                    <td class="text-gray-700">Dolor sit amet</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <!-- S: First Vaccination Box (Done) -->
        </div>

        <div class="flex flex-wrap">
          <!-- S: Link to Register Second Vaccination -->
          <div class="md:w-1/3 pr-4 pl-4">
            <div
              class="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-default"
            >
              <div
                class="py-3 px-6 mb-0 bg-gray-200 border-b-1 border-gray-300 text-gray-900 border-0"
              >
                <h5 class="mb-0">Second Vaccination</h5>
              </div>
              <div class="flex-auto p-6 text-teal-700">
                <router-link to="/vaccination">+ Register vaccination</router-link>
              </div>
            </div>
          </div>
          <!-- E: Link to Register Second Vaccination -->
        </div>
      </div>
    </section>
    <!-- End of Vaccination list -->
  </main>
</template>
