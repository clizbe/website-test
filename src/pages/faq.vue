<template>
  <v-app>
    <AppNavbar />
    <v-main>
      <div class="faq-page">// Remove the sections from the FAQ so it's just one list
        <h1>General</h1>
        <div v-for="(faq, index) in faqs.slice(0, 2)" :key="'general-' + index" class="faq-item">
          <button class="faq-question" @click="toggle(index)">
        {{ faq.question }}
          </button>
          <div v-if="faq.open" class="faq-answer">
        {{ faq.answer }}
          </div>
        </div>
        <h1>Scope</h1>
        <div v-for="(faq, index) in faqs.slice(3, 7)" :key="'scope-' + index" class="faq-item">
          <button class="faq-question" @click="toggle(index + 4)">
        {{ faq.question }}
          </button>
          <div v-if="faq.open" class="faq-answer">
        {{ faq.answer }}
          </div>
        </div>
        <h1>Features</h1>
        <div v-for="(faq, index) in faqs.slice(7)" :key="'features-' + index" class="faq-item">
          <button class="faq-question" @click="toggle(index + 7)">
        {{ faq.question }}
          </button>
          <div v-if="faq.open" class="faq-answer">
        {{ faq.answer }}
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'FaqPage',
  data() {
    return {
      faqs: [
        {
          question: 'What is Tulipa?',
          answer: 'Tulipa is a modelling framework for optimising and analysing energy systems. The underlying methodology is mixed-integer linear programming (MILP). Tulipa is designed to be flexible, scalable, and performant, making it suitable for a wide range of applications.',
          open: false
        },
        {
          question: 'Is it free to use?',
          answer: 'Yes, Tulipa is open-source. You can download it today by following the GitHub link.',
          open: false
        },
        {
          question: 'What geographic scope does Tulipa cover?',
          answer: 'The geographic scope depends entirely on the data. You can build an energy system on the moon, if you like.',
          open: false
        },
        {
          question: 'What energy carriers does it include?',
          answer: 'As a generalized framework, Tulipa can model virtually any energy carrier or commodity - they are defined in the data. Special constraints are available for electricity.',
          open: false
        },
        {
          question: 'What size of energy system can it handle?',
          answer: 'Tulipa is built to handle large and detailed systems, but since it is generalized, you can also model small systems. It depends on data. With flexible resolution, you can also model a detailed small system (or asset) inside a larger system.',
          open: false
        },
        {
          question: 'What technologies are included?',
          answer: 'Tulipa can model virtually all technologies using generalized building blocks: Production, Consumption, Conversion, Storage, and Transport. For instance, a Production asset might be a windfarm or an oil well. A Transport asset could be an electricity cable, a gas pipeline, or a shipping route. Some technological constraints (such as Unit Commitment) even have multiple formulations, so the analyst can choose the appropriate level of detail and computational burden.',
          open: false
        },
        {
          question: 'What time resolution does it use?',
          answer: 'Tulipa is the only existing model that has fully-flexible temporal resolution. That means different energy carriers, geographic regions, or time horizons can have different temporal resolutions - and they do not have to be multiples of each other. This means the analyst can reduce resolution where unnecessary, and increase it where needed, to get the best balance of accuracy and computational burden.',
          open: false
        },
        {
          question: 'Does Tulipa do investments?',
          answer: 'Yes, Tulipa includes endogenous investment optimisation.',
          open: false
        },
        {
          question: 'Does Tulipa do optimal dispatch?',
          answer: 'Yes, Tulipa includes endogenous dispatch optimisation.',
          open: false
        },
        {
          question: 'Does Tulipa have modelling to generate alternatives (MGA)?',
          answer: 'Almost - we have created NearOptimalAlternatives.jl, but it still needs polishing and integration into the workflow.',
          open: false
        }
      ]
    };
  },
  methods: {
    toggle(index) {
      this.faqs[index].open = !this.faqs[index].open;
    }
  }
};
</script>

<style scoped>
.faq-page {
  max-width: 700px;
  margin: 2rem auto;
  padding: 1rem;
}
.faq-list {
  margin-top: 2rem;
}
.faq-item {
  margin-bottom: 1rem;
  border-bottom: 1px solid #cdcdce;
}
.faq-question {
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 0.75rem 0;
}
.faq-answer {
  padding: 0.5rem 0 1rem 1rem;
  color: #e3e2e2;
}
</style>
