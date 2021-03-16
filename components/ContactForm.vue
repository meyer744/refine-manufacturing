<template>
  <form
    name="contact"
    method="POST"
    netlify-honeypot="bot-field"
    data-netlify="true"
  >
    <p class="hidden">
      <label
        >Don’t fill this out if you’re human: <input name="bot-field"
      /></label>
    </p>
    <div
      class="contact-form bg-white shadow-2xl rounded px-8 pt-6 pb-8 flex flex-col max-w-5xl border"
    >
      <div class="-mx-3 md:flex mb-6">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            First Name
          </label>
          <input
            class="appearance-none block w-11/12 bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
            type="text"
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Last Name
          </label>
          <input
            class="appearance-none block w-11/12 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-2">
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Email Address
          </label>
          <input
            class="appearance-none block w-11/12 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
            placeholder="example@example.com"
          />
        </div>
        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Subject
          </label>
          <input
            class="appearance-none block w-11/12 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="text"
          />
        </div>
        <div class="md:w-1/2 px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            File upload
          </label>
          <input
            class="appearance-none block w-11/12 bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
            type="file"
          />
        </div>
      </div>
      <div class="-mx-3 md:flex mb-6 mt-8">
        <div class="md:w-full px-3">
          <label
            class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          >
            Message:
          </label>
          <textarea
            class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
            type="text"
            placeholder="write your message here...."
          ></textarea>
        </div>
      </div>
       <button
          class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10"
        >
          SEND
        </button>
    </div>
  </form>
</template>
<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.contact-form {
  margin: auto;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
