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
        <div class="bg-gradient-to-r from-lime-500 to-green-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Oli's German Street Tacos</h1>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-8 border-l-4 border-red-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥩</span> The Meat
            </h2>
            <div class="mb-6">
              <p class="text-gray-700 mb-4"><strong>150g (Filet) steak per person</strong></p>
            </div>

            <h3 class="text-xl font-semibold text-gray-900 mb-4">Marinade:</h3>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1/2 cup worcestershire sauce</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Juice of 1 lime</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1 tsp paprika powder</span></li>
                </ul>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1 tsp Tabasco</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1 tsp ground cumin</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1 tbsp sunflower oil</span></li>
                </ul>
              </div>
            </div>
            <div class="mt-4 bg-red-100 border border-red-300 rounded-xl p-4 text-red-900">
              <p class="font-semibold">Slice steak into thin strips, add marinade, refrigerate for 12h, then fry/grill</p>
            </div>
          </section>

          <section class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-l-4 border-green-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥬</span> The Veggies
            </h2>
            <div class="bg-white rounded-xl p-6 shadow-sm">
              <ul class="space-y-3 text-gray-700">
                <li class="flex items-start"><span class="text-green-600 mr-2 text-xl">•</span><span>Cut bell pepper, onions, garlic, chilies and steam them</span></li>
                <li class="flex items-start"><span class="text-green-600 mr-2 text-xl">•</span><span>Season with salt and pepper to taste</span></li>
              </ul>
            </div>
          </section>

          <section class="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-l-4 border-yellow-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🌮</span> The Taco
            </h2>
            <div class="space-y-3">
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">1.</span>
                <span class="text-gray-700">Fry 2 yellow corn tortillas in a pan for 1-2 min each side</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">2.</span>
                <span class="text-gray-700">Add veggies and meat</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">3.</span>
                <span class="text-gray-700">Add red & green salsa, corn salsa, pico de gallo, guacamole</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 text-xl font-bold">4.</span>
                <span class="text-gray-700">Add freshly chopped cilantro and a squeeze of lime</span>
              </div>
            </div>
            <div class="mt-6 bg-gradient-to-r from-lime-500 to-green-500 text-white rounded-2xl p-6 text-center">
              <p class="text-2xl font-black">Enjoy! 😋</p>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-lime-100 text-lime-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div class="grid gap-6">
              <img :src="useImagePath('/IMG_0155.JPG')" alt="Street Tacos" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
