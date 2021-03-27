<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>

    <div class="content">
      <b-card class="main-card mb-3 text-center">
        <b-button v-b-modal.modal1 class="mr-2">Launch demo modal</b-button>
        <b-button v-b-modal.modallg class="mr-2" variant="primary">Large modal</b-button>
        <b-button v-b-modal.modalsm class="mr-2" variant="primary">Small modal</b-button>
      </b-card>
    </div>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  components: {
    PageTitle,
  },
  data: () => ({
    heading: 'Modals',
    subheading: 'Wide selection of modal dialogs styles and animations available.',
    icon: 'pe-7s-phone icon-gradient bg-premium-dark',
  }),
}
</script>
