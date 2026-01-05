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
        <div class="bg-gradient-to-r from-orange-600 to-amber-600 px-8 py-12 text-white">
          <h1 class="text-4xl sm:text-5xl font-black mb-4">Suppe</h1>
          <p class="text-lg text-white/90">
            Idee von <a href="https://www.youtube.com/watch?v=l8oZ-WcJY7k" target="_blank" class="underline hover:text-white">YouTube</a>
          </p>
        </div>

        <div class="px-8 py-12 space-y-10">
          <section class="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border-l-4 border-orange-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">🥕</span> Step 1: Ingredients
            </h2>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>4 große Kartoffeln</span></li>
                  <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>3 große Karotten</span></li>
                  <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>1 große Zwiebel</span></li>
                </ul>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm">
                <ul class="space-y-2 text-gray-700">
                  <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>1 Packung Tiefkühlerbsen</span></li>
                  <li class="flex items-start"><span class="text-orange-600 mr-2">•</span><span>4 Mettenden</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section class="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border-l-4 border-yellow-500">
            <h2 class="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <span class="mr-3 text-3xl">👨‍🍳</span> Step 2: Preparation
            </h2>
            <div class="space-y-3">
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Kartoffeln grob würfeln</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Karotten in grobe Halbmonde schneiden</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Zwiebel grob würfeln</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Im großen Topf 70g Butter bei mittlerer Hitze "nußig" schwitzen</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Zwiebeln, Kartoffeln und Karotten in der Butter für 5 min. anbraten</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Mit ca. 600ml Gemüsebrühe ablöschen</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Ca. 15 min kochen und weitere 50g Butter dazugeben</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Tiefkühlerbsen und geschnittene Mettenden dazu geben und weiter 4 Min kochen</span>
              </div>
              <div class="bg-white rounded-xl p-4 shadow-sm flex items-start">
                <span class="text-yellow-600 mr-3 mt-1 font-bold">•</span>
                <span class="text-gray-700">Pfeffer und Salz</span>
              </div>
            </div>
          </section>

          <div class="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8 text-center shadow-xl">
            <p class="text-3xl font-black">Guten Appetit! 🍲</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
