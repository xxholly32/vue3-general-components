<template>
  <main
    class="w-full flex flex-col bg-gray-10 dark:bg-black text-gray-700 dark:text-gray-200 overflow-hidden"
  >
    <Header />
    <div class="flex-1 flex min-h-0">
      <article class="overflow-auto w-full p-10">
        <router-view v-slot="{ Component }">
          <transition
            name="fade"
            enter-active-class="transition easing-entrance duration-250"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition easing-exit duration-150"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </article>
    </div>
    <footer class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</footer>
  </main>
</template>
