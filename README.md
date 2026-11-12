<p align="center">
  <a href="https://replyze.chat/?utm_source=github&utm_medium=add-live-chat-to-website">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Replyze/.github/main/assets/logo-on-dark.png">
      <img src="https://raw.githubusercontent.com/Replyze/.github/main/assets/logo-on-light.png" alt="Replyze" height="48">
    </picture>
  </a>
</p>

# How to add live chat to any website

Copy-paste code to put a live chat with an AI agent on your website, for every common platform: plain HTML, WordPress, WooCommerce, Shopify, Wix, Squarespace, Webflow, Framer, Ghost, Joomla, Drupal, Magento, PrestaShop, BigCommerce, Google Tag Manager, React, Next.js, Vue, Nuxt, Angular, SvelteKit, Laravel, Django and Ruby on Rails. Plus what single-page apps, Content-Security-Policy and cookie banners need.

The code is for the [Replyze](https://replyze.chat/?utm_source=github&utm_medium=add-live-chat-to-website) chat widget. Where the code goes on each platform is the same for most chat widgets.

## Contents

[The snippet](#the-snippet) ·
[HTML](#plain-html) · [WordPress](#wordpress) · [WooCommerce](#woocommerce) · [Shopify](#shopify) ·
[Wix](#wix) · [Squarespace](#squarespace) · [Webflow](#webflow) · [Framer](#framer) · [Ghost](#ghost) ·
[Joomla](#joomla) · [Drupal](#drupal) · [Magento](#magento-and-adobe-commerce) · [PrestaShop](#prestashop) · [BigCommerce](#bigcommerce) ·
[Google Tag Manager](#google-tag-manager) ·
[React](#react) · [Next.js](#nextjs) · [Vue](#vue) · [Nuxt](#nuxt) · [Angular](#angular) · [Svelte and SvelteKit](#svelte-and-sveltekit) ·
[Laravel](#laravel) · [Django](#django) · [Ruby on Rails](#ruby-on-rails) ·
[Single-page apps](#single-page-apps) · [Your own chat button](#open-the-chat-from-your-own-button) · [Options](#options) · [Signed-in users](#signed-in-users) · [Cookie consent](#cookie-consent) · [Content-Security-Policy](#content-security-policy) · [Troubleshooting](#troubleshooting)

## The snippet

You need your widget token (`wgt_...`). It is in the Replyze dashboard under **Settings → Integrations → Install widget**, where you can also copy the whole snippet. No account yet? [Sign up](https://client.replyze.chat/register?utm_source=github&utm_medium=add-live-chat-to-website).

```html
<script>
  window.ReplyzeConfig = {
    token: 'wgt_YOUR_TOKEN',
    apiUrl: 'https://client.replyze.chat'
  };
</script>
<script src="https://cdn.replyze.chat/widget.js" async></script>
```

The same in **one tag**, with no inline script (handy with a strict Content-Security-Policy and in frameworks):

```html
<script src="https://cdn.replyze.chat/widget.js" data-token="wgt_YOUR_TOKEN" async></script>
```

And as **JavaScript only**, for settings fields that take JavaScript rather than HTML:

```js
window.ReplyzeConfig = { token: 'wgt_YOUR_TOKEN', apiUrl: 'https://client.replyze.chat' };
(function () {
  var s = document.createElement('script');
  s.src = 'https://cdn.replyze.chat/widget.js';
  s.async = true;
  document.head.appendChild(s);
})();
```

- Put it on every page, once. Right before `</body>` is the usual place; `<head>` works too, because the script is `async` and the chat waits for the page.
- The token is not a secret: it is in your page's HTML for anyone to see. It only lets the chat talk to your workspace.
- Website builders (Wix, Squarespace, Webflow, Framer) run custom code only on plans that allow it. If you can't find the setting, check your plan.

## Plain HTML

Paste the snippet right before `</body>` in every page, or once in the layout every page uses: `_layouts/default.html` in Jekyll, `layouts/_default/baseof.html` in Hugo, your base layout in Eleventy or Astro.

## WordPress

Three ways, pick one:

1. **The plugin**: [wordpress-live-chat](https://github.com/Replyze/wordpress-live-chat). Install the ZIP (Plugins → Add New → Upload Plugin), activate it and paste your widget token in its settings.
2. **A header and footer plugin**, such as WPCode: Code Snippets → Header & Footer, paste the snippet into the **Footer** box, save.
3. **Your child theme's** `functions.php`:

```php
add_action( 'wp_footer', function () {
	?>
	<script>
	  window.ReplyzeConfig = { token: 'wgt_YOUR_TOKEN', apiUrl: 'https://client.replyze.chat' };
	</script>
	<script src="https://cdn.replyze.chat/widget.js" async></script>
	<?php
} );
```

Use a child theme for this: a theme update replaces the parent theme's `functions.php`.

If the chat shows up late or not at all, a caching or optimization plugin may be delaying or combining scripts (for example "Delay JavaScript execution" in WP Rocket). Exclude `cdn.replyze.chat/widget.js` there.

## WooCommerce

A WooCommerce store is a WordPress site: use any of the [WordPress](#wordpress) ways. The chat then shows on the shop, product, cart and checkout pages too.

## Shopify

1. Shopify admin → **Online Store → Themes**.
2. On your current theme, open the menu (**…**) → **Edit code**.
3. Open **Layout → theme.liquid**.
4. Paste the snippet right before `</body>` and click **Save**.

The chat shows on every page your theme renders. Shopify's checkout doesn't use your theme's code, so it isn't there. If you switch themes, paste the snippet into the new one.

## Wix

1. Wix dashboard → **Settings → Custom Code** (under Advanced).
2. **+ Add Custom Code**, paste the snippet.
3. Name it "Replyze Chat", **Add Code to Pages: All pages** (load once), **Place Code in: Body - end**.
4. **Apply**.

## Squarespace

1. Open **Code Injection** (Settings → Advanced → Code Injection on most sites).
2. Paste the snippet into the **Footer** box and **Save**.

## Webflow

1. **Site settings** (Project settings in older dashboards) → **Custom code**.
2. Paste the snippet into **Footer code** and **Save changes**.
3. **Publish** the site. Custom code runs on the published site, not in the Designer.

## Framer

1. **Site Settings → General → Custom Code**.
2. Paste the snippet into **End of `<body>` tag**.
3. **Publish**.

## Ghost

Ghost admin → **Settings → Code injection** → paste the snippet into **Site footer** → **Save**.

## Joomla

1. Joomla admin → **System → Site Templates**, open your template.
2. Open `index.php` and paste the snippet right before `</body>`.
3. **Save & Close**. A template update can overwrite the file; paste it again after one.

## Drupal

1. Install the **Asset Injector** module.
2. **Configuration → Development → Asset Injector → JS Injector → Add JS Injector**.
3. Paste the [JavaScript-only](#the-snippet) version of the snippet.
4. Under Advanced, turn **Preprocess JS** off, and save.

## Magento and Adobe Commerce

1. Admin → **Content → Design → Configuration**, edit your store view.
2. Expand **HTML Head → Scripts and Style Sheets**, paste the snippet, **Save Configuration**.
3. Flush the cache: **System → Cache Management**.

## PrestaShop

Use a module that adds custom HTML to a hook, and put the snippet on the **displayBeforeBodyClosingTag** hook (Design → Positions shows which module is on which hook).

## BigCommerce

1. **Storefront → Script Manager → Create a Script**.
2. Name "Replyze Chat", **Location: Footer**, **Pages: All pages**, **Script type: Script**.
3. Category: **Functional**. If your store asks visitors for cookie consent and you want the chat to load before they answer, choose **Essential**.
4. Paste the snippet and **Save**.

## Google Tag Manager

1. **Tags → New → Tag Configuration → Custom HTML**.
2. Paste the snippet.
3. **Triggering: All Pages**.
4. Save, then **Submit** to publish the container.

## React

The simplest way is the HTML file every page loads: paste the snippet before `</body>` in `index.html` (Vite) or `public/index.html` (Create React App).

Or as a component, rendered once near the root of your app:

```jsx
import { useEffect } from 'react';

export default function ReplyzeChat({ token }) {
  useEffect(() => {
    if (document.querySelector('script[src="https://cdn.replyze.chat/widget.js"]')) return;
    window.ReplyzeConfig = { token, apiUrl: 'https://client.replyze.chat' };
    const script = document.createElement('script');
    script.src = 'https://cdn.replyze.chat/widget.js';
    script.async = true;
    document.body.appendChild(script);
  }, [token]);

  return null;
}
```

```jsx
<ReplyzeChat token="wgt_YOUR_TOKEN" />
```

The chat stays for the life of the page, across route changes. Don't mount and unmount it per route.

## Next.js

**App Router**, `app/layout.tsx`:

```tsx
import Script from 'next/script';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://cdn.replyze.chat/widget.js"
          data-token="wgt_YOUR_TOKEN"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
```

**Pages Router**, `pages/_app.tsx`:

```tsx
import type { AppProps } from 'next/app';
import Script from 'next/script';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        src="https://cdn.replyze.chat/widget.js"
        data-token="wgt_YOUR_TOKEN"
        strategy="afterInteractive"
      />
    </>
  );
}
```

`next/script` passes `data-token` on to the script tag. To keep the token in an environment variable, use `data-token={process.env.NEXT_PUBLIC_REPLYZE_TOKEN}`.

## Vue

Paste the snippet before `</body>` in `index.html` (Vite). The chat stays across Vue Router navigation.

## Nuxt

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: 'https://cdn.replyze.chat/widget.js', async: true, 'data-token': 'wgt_YOUR_TOKEN' },
      ],
    },
  },
});
```

## Angular

Paste the snippet before `</body>` in `src/index.html`.

## Svelte and SvelteKit

SvelteKit: paste the snippet before `</body>` in `src/app.html`. Svelte with Vite: in `index.html`.

## Laravel

In the layout every page extends, for example `resources/views/layouts/app.blade.php`, right before `</body>`:

```blade
<script src="https://cdn.replyze.chat/widget.js" data-token="{{ config('services.replyze.token') }}" async></script>
```

`config/services.php`:

```php
'replyze' => [
    'token' => env('REPLYZE_WIDGET_TOKEN'),
],
```

`.env`:

```
REPLYZE_WIDGET_TOKEN=wgt_YOUR_TOKEN
```

## Django

In your base template (the one other templates `{% extends %}`), right before `</body>`:

```django
<script src="https://cdn.replyze.chat/widget.js" data-token="wgt_YOUR_TOKEN" async></script>
```

## Ruby on Rails

`app/views/layouts/application.html.erb`, inside `<head>`:

```erb
<script src="https://cdn.replyze.chat/widget.js" data-token="wgt_YOUR_TOKEN" async></script>
<script>
  // Turbo Drive swaps <body> on every visit: carry the chat over to the new one.
  document.addEventListener('turbo:before-render', function (event) {
    var chat = document.getElementById('aichat-widget');
    if (chat) event.detail.newBody.appendChild(chat);
  });
</script>
```

Without the second script, the chat disappears after the first click on a Turbo link, because Turbo replaces the page's `<body>` and the chat lives there. With it, the same chat (and the open conversation) moves to the new page.

## Single-page apps

Load the snippet once, in the HTML shell or the root layout. The chat notices route changes by itself (`pushState`, `replaceState`, back and forward), so you don't need to call anything when the route changes. If the script tag ends up on the page twice, only one chat starts.

## Open the chat from your own button

```html
<script>
  window.Replyze = window.Replyze || { _queue: [] };
  function openChat() {
    if (window.Replyze._initialized) window.Replyze.open();
    else window.Replyze._queue.push(['open']);
  }
</script>
<button type="button" onclick="openChat()">Chat with us</button>
```

Put the first script before the snippet. Calls made before the chat has loaded wait in `_queue` and run as soon as it starts.

Other calls: `Replyze.close()`, `Replyze.toggle()`, and events with `Replyze.on(name, callback)`: `ready`, `open`, `close`, `message:sent`, `message:received`. Everything the JavaScript API can do: [Replyze docs](https://github.com/Replyze/replyze).

## Options

Per site or per page, in `window.ReplyzeConfig`. Settings you don't pass come from the dashboard.

```js
window.ReplyzeConfig = {
  token: 'wgt_YOUR_TOKEN',
  apiUrl: 'https://client.replyze.chat',
  overrides: {
    color: '#0f766e',            // the chat's main color
    position: 'bottom_left',     // or 'bottom_right'
    theme: 'dark',               // or 'light'
    bot_name: 'Ava',
    welcome_message: 'Questions about your order? Ask here.',
    show_greeting_teaser: false, // the welcome card next to the chat button
    auto_open_delay: 20          // open by itself after 20 seconds (0 to 300)
  }
};
```

## Signed-in users

When someone is signed in on your site, tell the chat who they are, so the conversation lands on their contact in your inbox:

```js
Replyze.identify('jane@example.com', 'Jane Doe');
```

Everything else the JavaScript API can do: [Replyze docs](https://github.com/Replyze/replyze).

## Cookie consent

The chat works with or without visitor tracking (the pages a visitor views, shown to your team). To wait for consent, start with tracking off and turn it on when the visitor agrees:

```js
window.ReplyzeConfig = {
  token: 'wgt_YOUR_TOKEN',
  apiUrl: 'https://client.replyze.chat',
  tracking: false
};

// later, in your cookie banner's "accept" handler:
Replyze.setTracking(true);
```

`Replyze.setTracking(false)` turns it off again and removes the tracking cookie.

## Content-Security-Policy

If your site sends a `Content-Security-Policy` header, add these sources to it:

```
script-src  https://cdn.replyze.chat
connect-src https://client.replyze.chat wss://client.replyze.chat
style-src   'unsafe-inline'
img-src     https: data:
media-src   data:
```

- `style-src 'unsafe-inline'`: the chat puts its styles inside its own shadow DOM, which a policy without it blocks.
- `img-src https:`: agent photos, attachments and product pictures can come from more than one host.
- `media-src data:`: the new-message sound.
- The two-tag snippet has an inline script, which needs `'unsafe-inline'` or a nonce in `script-src`. The [one-tag form](#the-snippet) doesn't.

## Troubleshooting

**The chat doesn't appear.** Open the browser console. `[Replyze] No config found` means the token didn't reach the page: check the snippet. A blocked request mentioning `client.replyze.chat` or `cdn.replyze.chat` points to your [Content-Security-Policy](#content-security-policy).

**It works on one domain but not another.** In the dashboard, the widget's **Allowed domains** list (Settings → Chat Widget) decides which sites can show it. An empty list allows every site. With entries, the host must match: `example.com` doesn't cover `www.example.com`; `*.example.com` covers both. For a local test, add `localhost`.

**Only some visitors don't see it.** Usually a browser extension that blocks chat widgets. The chat's own requests avoid the paths common filter lists block, but an extension can still block the script.

**It shows late.** A cache or optimization plugin, or a tag manager rule, is delaying scripts until the visitor interacts. Exclude `cdn.replyze.chat/widget.js`.

**It disappears after navigation on a Rails site.** See the Turbo Drive script under [Ruby on Rails](#ruby-on-rails).

---

The three embed forms, the button queue, loading the script twice, the tracking switch, the Content-Security-Policy above and the Turbo Drive script were tested in Chromium against the live widget in November 2026. Spotted a platform that is missing or a menu that moved? Open an issue or a pull request.

More: [the full guide on our site](https://replyze.chat/answers/how-to-add-live-chat-to-website?utm_source=github&utm_medium=add-live-chat-to-website) · [Replyze docs](https://github.com/Replyze/replyze) · [MCP server](https://github.com/Replyze/replyze-mcp) · [pricing](https://replyze.chat/pricing?utm_source=github&utm_medium=add-live-chat-to-website)

## License

MIT, see [LICENSE](LICENSE).
