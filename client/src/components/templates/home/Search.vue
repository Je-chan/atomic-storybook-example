<template>
  <div class="container">
    <Input
      size="max"
      placeholder="Write down a grew name!"
      palette="green"
      @inputHandler="updateValue"
      @keyup.enter="apply" />
    <div class="selects">
      <select
        v-model="$data[filter.name]"
        class="form-select">
        <option value="">
          All Teams
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <CustomizedButton
      palette="green"
      fw="700"
      colored
      size="m"
      @click="apply">
      Apply
    </CustomizedButton>
  </div>
</template>

<script>
import Input from '~/components/atoms/input/Input.vue';
import CustomizedButton from '~/components/atoms/button/CustomizedButton.vue';
export default {
  components: {
    Input,
    CustomizedButton,
  },

  data() {
    return {
      grewName: '',
      team: '',
      number: 10,
      year: '',
      filter: {
        name: 'team',
        items: ['개발 1팀', '개발 2팀', '개발 3팀', '개발 4팀'],
      },
    };
  },

  methods: {
    updateValue(data) {
      this.grewName = data;
    },

    async apply(grewName) {
      if (typeof grewName !== 'string') {
        grewName = this.grewName;
      }
      this.$store.dispatch('grew/searchGrew', {
        grewName: grewName || 'all',
        team: this.team || 'all',
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  > * {
    margin-right: 10px;
    font-size: 15px;
    &:last-child {
      margin-right: 0;
    }
  }
  .selects {
    display: flex;
    select {
      width: 120px;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
    }
  }

  @include media-breakpoint-down(lg) {
    display: block;
    input {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .selects {
      margin-right: 0;
      margin-bottom: 10px;
      select {
        width: 100%;
      }
    }
    .btn {
      width: 100%;
    }
  }
}
</style>
