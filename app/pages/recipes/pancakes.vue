<template>
  <div class="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <NuxtLink to="/" class="inline-flex items-center text-white hover:text-white/80 transition-colors mb-8 group">
        <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        Back to Recipes
      </NuxtLink>

      <div class="bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div class="bg-gradient-to-r from-yellow-500 to-orange-500 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Perfect US Style Pancakes</h1>
        </div>

        <div class="px-8 py-12 space-y-12">
          <section>
            <p class="text-xl text-gray-700 leading-relaxed mb-6">
              Perfect US style pancakes are not too hard to make, but there is one thing you really need to understand:
            </p>
            <div class="bg-gradient-to-r from-red-500 to-pink-500 rounded-2xl p-8 text-center shadow-xl transform hover:scale-105 transition-transform">
              <h2 class="text-4xl font-black text-white">DO NOT OVER STIR!</h2>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🎥
              </span>
              Recipe Videos
            </h2>
            <div class="grid gap-4">
              <a href="https://www.youtube.com/watch?v=4QcK3MXl9sg" target="_blank"
                 class="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-yellow-200">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">▶️</span>
                  <span class="text-lg font-semibold text-gray-800">Easy to Follow Recipe Video</span>
                </div>
              </a>
              <a href="https://www.youtube.com/watch?v=2iWUUcW08ac" target="_blank"
                 class="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-orange-200">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">😄</span>
                  <span class="text-lg font-semibold text-gray-800">Older (but funnier) Version</span>
                </div>
              </a>
              <a href="https://munchies.vice.com/en_us/article/kbke93/fluffy-pancakes" target="_blank"
                 class="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-red-200">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">📖</span>
                  <span class="text-lg font-semibold text-gray-800">Vice Munchies Recipe</span>
                </div>
              </a>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-yellow-100 text-yellow-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div class="grid md:grid-cols-3 gap-6">
              <img :src="useImagePath('/IMG_7644.jpg')" alt="Pancakes" class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <img :src="useImagePath('/IMG_7641.jpg')" alt="Pancakes" class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
              <img :src="useImagePath('/IMG_0881.jpeg')" alt="Pancakes" class="rounded-2xl shadow-lg w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
