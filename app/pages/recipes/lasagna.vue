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
        <div class="bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Lasagne</h1>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🥘
              </span>
              Ingredients
            </h2>
            <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6">
              <div class="grid md:grid-cols-2 gap-4">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>500g ground beef/pork mix</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>3 cans peeled tomatoes</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>50g Parmigiano-Reggiano</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>150g mozzarella</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>Salt/pepper/italian herbs</span></li>
                </ul>
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>100g tomato paste</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1 large onion</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1 garlic bulb</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>A little cream</span></li>
                  <li class="flex items-start"><span class="text-green-600 mr-2">•</span><span>1 box lasagna sheets</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-2xl p-6">
            <h3 class="text-lg font-bold text-yellow-900 mb-2">💡 Pro Tip</h3>
            <p class="text-yellow-800">Don't use too much Parmigiano-Reggiano as it's very salty!</p>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                🔗
              </span>
              External Links
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <a href="http://www.chefkoch.de/rezepte/1375591242637628/Sizilianische-Maennerlasagne.html" target="_blank"
                 class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-green-200">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">👨‍🍳</span>
                  <span class="text-lg font-semibold text-gray-800">chefkoch.de</span>
                </div>
              </a>
              <a href="https://resepiz.com/post/sicilian-mans-lasagna-10" target="_blank"
                 class="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-emerald-200">
                <div class="flex items-center">
                  <span class="text-2xl mr-4">📖</span>
                  <span class="text-lg font-semibold text-gray-800">resepiz.com</span>
                </div>
              </a>
            </div>
          </section>

          <section>
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="bg-green-100 text-green-600 w-10 h-10 rounded-full flex items-center justify-center mr-4">
                📸
              </span>
              Gallery
            </h2>
            <div class="grid md:grid-cols-2 gap-6">
              <img src="/P1010265.JPG" alt="Lasagna" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
              <img src="/IMG_1407.JPG" alt="Lasagna" class="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-300" />
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
