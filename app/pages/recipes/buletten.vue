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
        <div class="bg-gradient-to-r from-amber-600 to-red-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">German Meat Balls (Buletten)</h1>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🥩
              </span>
              Buletten
            </h2>

            <div class="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-6 mb-6">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Ingredients</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>600g ground beef/pork mix</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>2 eggs</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>1-2 german buns (kaiser-brötchen)</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>Milk to wet the buns</span></li>
                </ul>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>Salt, pepper, paprika to taste</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>1/2 bulb of garlic</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>1 large onion</span></li>
                  <li class="flex items-start"><span class="text-amber-600 mr-2">•</span><span>Mustard</span></li>
                </ul>
              </div>
            </div>

            <div class="bg-gradient-to-br from-amber-50 to-red-50 rounded-2xl p-6 border-l-4 border-amber-500">
              <h3 class="text-xl font-bold text-gray-900 mb-4">Preparation</h3>
              <div class="space-y-2 text-gray-700">
                <div class="flex items-start"><span class="text-amber-600 mr-2 font-bold">1.</span><span>Chop onions and garlic (finer is better)</span></div>
                <div class="flex items-start"><span class="text-amber-600 mr-2 font-bold">2.</span><span>Cut buns in pieces, add milk and squish until mushy</span></div>
                <div class="flex items-start"><span class="text-amber-600 mr-2 font-bold">3.</span><span>Add meat and eggs</span></div>
                <div class="flex items-start"><span class="text-amber-600 mr-2 font-bold">4.</span><span>Add mustard, salt, pepper, paprika</span></div>
                <div class="flex items-start"><span class="text-amber-600 mr-2 font-bold">5.</span><span>Squish the mixture well</span></div>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-red-100 text-red-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🍅
              </span>
              Tomato Sauce
            </h2>
            <div class="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6">
              <div class="grid md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>3 cans of peeled tomatoes</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>3/4 large onion</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>1/2 bulb of garlic</span></li>
                </ul>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Salt/pepper/italian herbs</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Olive oil</span></li>
                  <li class="flex items-start"><span class="text-red-600 mr-2">•</span><span>Tomato paste (1/2 tube)</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-amber-100 text-amber-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div>
              <img src="/IMG_8735.JPG" alt="Buletten" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
