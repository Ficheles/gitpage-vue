<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Sizing" class="main-card mb-3">
          <b-pagination v-model="currentPage" size="md" :total-rows="100" :per-page="10"> </b-pagination>
          <div class="divider"></div>
          <b-pagination v-model="currentPage" size="sm" :total-rows="100" :per-page="10"> </b-pagination>
          <div class="divider"></div>
          <b-pagination v-model="currentPage" size="lg" :total-rows="100" :per-page="10"> </b-pagination>
          <div class="divider"></div>
          <div class="text-center">Current Page: {{ currentPage }}</div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Navigation" class="main-card mb-3">
          <h6>Default</h6>
          <b-pagination-nav v-model="currentPage" base-url="#" :number-of-pages="10" />
          <h6 class="mt-4">With link generator function</h6>
          <b-pagination-nav v-model="currentPage" :link-gen="linkGen" :number-of-pages="10" />
          <div class="divider"></div>
          <div class="text-center">Current Page: {{ currentPage }}</div>
        </b-card>
      </b-col>
    </b-row>
    <b-card title="Alignments" class="main-card mb-3">
      <h6>Left alignment (default)</h6>
      <b-pagination v-model="currentPage" :total-rows="100" :per-page="10"> </b-pagination>
      <br />

      <h6>Center alignment</h6>
      <b-pagination v-model="currentPage" align="center" :total-rows="100" :per-page="10"> </b-pagination>
      <br />

      <h6>Right (end) alignment</h6>
      <b-pagination v-model="currentPage" align="right" :total-rows="100" :per-page="10"> </b-pagination>
      <div class="divider"></div>
      <div class="text-center">Current Page: {{ currentPage }}</div>
    </b-card>
  </div>
</template>

<script>
import PageTitle from '../../Layout/Components/PageTitle.vue'

export default {
  components: {
    PageTitle,
  },
  data: () => ({
    heading: 'Pagination',
    subheading: 'Basic and dynamic pagination for use in your next awesome application.',
    icon: 'pe-7s-notebook icon-gradient bg-mixed-hopes',

    currentPage: 3,
  }),
  methods: {
    linkGen(pageNum) {
      return '#page/' + pageNum + '/foobar'
    },
  },
}
</script>
