<template>
  <div class="not-prose">
    <section v-if="pending">Loading...</section>
    <section v-else-if="error">Something went wrong... Try again!</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repository in repos" :key="repository.id"
          class="border border-gray-200 dark:border-gray-800 rounded-sm p-4 hover:bg-gray-200 dark:hover:bg-gray-800 font-mono">
          <a :href="repository.html_url" target="_blank">
            <div class="flex items-center justify-between text-sm">
              <div class="font-semibold">{{ repository.name }}</div>
              <div>{{ repository.stargazers_count }} ★</div>
            </div>
             <p class="text-sm">
              {{ repository.description }}
            </p>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts" setup>

interface IRepo {
  description: string,
  stargazers_count: number,
  id: number,
  html_url: string,
  name: string
}

const { error, pending, data } = useFetch('https://api.github.com/users/huynhtam258/repos')
const repos = computed(() => {
  return (data.value as IRepo[])
    .filter(repo => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
})
</script>

<style lang="scss" scoped>

</style>