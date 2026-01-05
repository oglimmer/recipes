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
        <div class="bg-gradient-to-r from-lime-600 to-green-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Guacamole, Bacon, Grilled Cheese Sandwich</h1>
          <p class="text-xl text-white/90">Serves 1 person</p>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section class="bg-gradient-to-br from-green-50 to-lime-50 rounded-2xl p-8 border-l-4 border-green-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥑</span> Guacamole
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1/2 Avocado, mashed</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1/2 Onion, chopped</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>2 cloves garlic, chopped</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1/2 Tomato, chopped</span></li>
              </ul>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Handful cilantro, chopped</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1/2 tsp lime juice</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1/2 chili pepper, chopped</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Salt and pepper to taste</span></li>
              </ul>
            </div>
          </section>

          <section class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥓</span> Bacon
            </h2>
            <p class="text-gray-700 text-lg">Fry 6 slices of bacon and put aside</p>
          </section>

          <section class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-4 border-yellow-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥪</span> The Toast
            </h2>
            <div class="space-y-3">
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">1.</span>
                <span class="text-gray-700">Butter toast and put butter side down in a frying pan</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">2.</span>
                <span class="text-gray-700">Add 1/2 cup of shredded cheese (like emmentaler) on top</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">3.</span>
                <span class="text-gray-700">Add guacamole, then bacon</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">4.</span>
                <span class="text-gray-700">Put another buttered toast on top (butter side up)</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">5.</span>
                <span class="text-gray-700">Fry for 3-4 min until bottom is brown</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">6.</span>
                <span class="text-gray-700">Turn over and fry for another 3-4 min</span>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-lime-100 text-lime-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div>
              <img src="/IMG_3836.JPG" alt="Grilled Cheese" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
