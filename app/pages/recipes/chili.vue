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
        <div class="bg-gradient-to-r from-red-600 to-orange-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Oli's Red Chili with Beans</h1>
          <p class="text-xl text-white/90 font-light italic">
            This is not supposed to be a regular Chili Con Carne. This is my own crazy version!
          </p>
        </div>

        <div class="px-8 py-12 space-y-8">
          <div class="space-y-6">
            <div class="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border-l-4 border-red-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-3">🥩</span> Fry the Beef
              </h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>400g ground beef (or beef/pork mix)</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Get a good brown crust - we want the Maillard reaction!</span></li>
                <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Add 1 tbsp tomato concentrate at the end</span></li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 border-l-4 border-orange-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-3">🌶️</span> Fry the Chili Peppers
              </h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>16 chili peppers, chopped (variety is good!)</span></li>
                <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>Remove seeds to reduce heat if desired</span></li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-yellow-50 to-green-50 rounded-2xl p-6 border-l-4 border-yellow-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-3">🧄</span> Fry Aromatics & Bell Peppers
              </h3>
              <ul class="space-y-2 text-gray-700">
                <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span><span>1 large onion + garlic cloves, chopped</span></li>
                <li class="flex items-start"><span class="text-yellow-600 mr-2">•</span><span>4 bell peppers (red, green, yellow, orange)</span></li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-3">🍲</span> Add to Large Pot
              </h3>
              <div class="grid md:grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p class="font-semibold mb-2">Main Ingredients:</p>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start"><span class="mr-2">•</span><span>Everything from frying</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>5 tbsp olive oil</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>800g peeled tomatoes</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>Bottle of sieved tomatoes</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>1 cup Whiskey</span></li>
                  </ul>
                </div>
                <div>
                  <p class="font-semibold mb-2">Spices:</p>
                  <ul class="space-y-1 text-sm">
                    <li class="flex items-start"><span class="mr-2">•</span><span>1 tbsp honey</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>2 tbsp ground cumin</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>4 tbsp sweet paprika</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>1 tbsp smoked paprika</span></li>
                    <li class="flex items-start"><span class="mr-2">•</span><span>Tabasco to taste</span></li>
                  </ul>
                </div>
              </div>
              <div class="mt-4 bg-red-600 text-white rounded-xl p-4 text-center font-bold">
                Cook on low-medium heat for 1 hour
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-l-4 border-green-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <span class="mr-3">🫘</span> Add the Beans
              </h3>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm text-gray-700">
                <div class="bg-white rounded-lg p-3 text-center shadow-sm">Corn</div>
                <div class="bg-white rounded-lg p-3 text-center shadow-sm">Kidney Beans</div>
                <div class="bg-white rounded-lg p-3 text-center shadow-sm">Pinto Beans</div>
                <div class="bg-white rounded-lg p-3 text-center shadow-sm">Black Beans</div>
                <div class="bg-white rounded-lg p-3 text-center shadow-sm">White Beans</div>
              </div>
              <div class="mt-4 bg-green-600 text-white rounded-xl p-4 text-center font-bold">
                Simmer for another 20 minutes
              </div>
            </div>

            <div class="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-2xl p-6 text-center">
              <p class="text-xl font-bold">Serve with Tortilla Chips!</p>
            </div>
          </div>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <img :src="useImagePath('/IMG_7259.jpeg')" alt="Chili" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
              <img :src="useImagePath('/IMG_7162.jpeg')" alt="Chili" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
