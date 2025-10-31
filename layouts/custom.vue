<template>
  <div>
    <header>
      <slot name="header">
        Custom header content
      </slot>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>