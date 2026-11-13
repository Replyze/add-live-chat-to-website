<p align="center">
  <a href="https://replyze.chat/?utm_source=github&utm_medium=add-live-chat-to-website">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Replyze/.github/main/assets/logo-on-dark.png">
      <img src="https://raw.githubusercontent.com/Replyze/.github/main/assets/logo-on-light.png" alt="Replyze" height="48">
    </picture>
  </a>
</p>

# How to add live chat to any website

Copy-paste code to put a live chat with an AI agent on your website, for every common platform: plain HTML, WordPress, WooCommerce, Shopify, Wix, Squarespace, Webflow, Framer, Ghost, Joomla, Drupal, Magento, PrestaShop, BigCommerce, Google Tag Manager, React, Next.js, Vue, Nuxt, Angular, SvelteKit, Laravel, Django and Ruby on Rails. Plus what single-page apps, Content-Security-Policy and cookie banners need, and a troubleshooting list. The code is for the [Replyze](https://replyze.chat/?utm_source=github&utm_medium=add-live-chat-to-website) chat widget; where the code goes on each platform is the same for most chat widgets.

**[Create a free account](https://client.replyze.chat/register?utm_source=github&utm_medium=add-live-chat-to-website&utm_content=cta-top)** · [Live demo](https://replyze.chat/?utm_source=github&utm_medium=add-live-chat-to-website&utm_content=live-demo) · [Docs](https://github.com/Replyze/replyze)

## Quickstart

1. **Get your widget token.** [Create a free account](https://client.replyze.chat/register?utm_source=github&utm_medium=add-live-chat-to-website&utm_content=quickstart), then copy the token (`wgt_...`) from **Settings → Integrations → Install widget**. The same page shows the whole snippet with your token in it.
2. **Paste the snippet** right before `</body>` on every page, or into your platform's footer code box ([where that is](#contents)):

   ```html
   <script src="https://cdn.replyze.chat/widget.js" data-token="wgt_YOUR_TOKEN" async></script>
   ```

3. **Open your site.** The chat bubble appears in the bottom corner. If it doesn't, see [Troubleshooting](#troubleshooting).

The live demo is replyze.chat itself: the chat bubble in the bottom-right corner is this widget.

### A package does it for you

| You use | Take |
|---|---|
| React or Next.js | [react-live-chat](https://github.com/Replyze/react-live-chat): a `<ReplyzeChat />` component, a `useReplyze()` hook for your own buttons, typed events |
| Vue or Nuxt | [vue-live-chat](https://github.com/Replyze/vue-live-chat) |
| WordPress or WooCommerce | [wordpress-live-chat](https://github.com/Replyze/wordpress-live-chat): a plugin, no theme edits |
| A React Native or Expo app | [react-native-live-chat](https://github.com/Replyze/react-native-live-chat) |
| A Flutter app | [flutter-live-chat](https://github.com/Replyze/flutter-live-chat) |

## Contents

[The snippet](#the-snippet) ·
[HTML](#plain-html) · [WordPress](#wordpress) · [WooCommerce](#woocommerce) · [Shopify](#shopify) ·
[Wix](#wix) · [Squarespace](#squarespace) · [Webflow](#webflow) · [Framer](#framer) · [Ghost](#ghost) ·
[Joomla](#joomla) · [Drupal](#drupal) · [Magento](#magento-and-adobe-commerce) · [PrestaShop](#prestashop) · [BigCommerce](#bigcommerce) ·
[Google Tag Manager](#google-tag-manager) ·
[React](#react) · [Next.js](#nextjs) · [Vue](#vue) · [Nuxt](#nuxt) · [Angular](#angular) · [Svelte and SvelteKit](#svelte-and-sveltekit) ·
[Laravel](#laravel) · [Django](#django) · [Ruby on Rails](#ruby-on-rails) · [Mobile apps](#mobile-apps) ·
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
- Wix, Squarespace and Webflow run site-wide custom code only on some plans (Wix also needs a published site with a connected domain). If you can't find the setting, check your plan.

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

The chat shows on every page your theme renders. Checkout pages are rendered by Shopify, not by your theme, so the chat isn't on them. If you switch themes, paste the snippet into the new one.

## Wix

Your site must be published and have a connected domain.

1. Your site's dashboard → **Settings** → **Custom Code** (in the **Development & integrations** section).
2. **+ Add Custom Code**, paste the snippet, and give it a name such as "Replyze Chat".
3. **Add Code to Pages: All pages**, loaded once. **Place Code in: Body - end**.
4. **Apply**.

## Squarespace

1. Open the **Code Injection** panel. [Squarespace's own guide](https://support.squarespace.com/hc/en-us/articles/205815908-Adding-custom-code-to-your-site) links straight to it.
2. Paste the snippet into the **Footer** box and **Save**.

Squarespace doesn't run injected code on checkout pages, and code injection is only on some plans.

## Webflow

1. **Site settings → Custom code** tab.
2. Paste the snippet into **Footer code** and **Save changes**.
3. **Publish** the site. Custom code shows in preview, but it goes live only when the site is published.

Site-wide custom code needs a paid Site plan or certain paid Workspace plans.

## Framer

1. **Site Settings → Custom Code**.
2. Add the snippet at the end of `<body>`.
3. **Publish**, and check the live page: Framer doesn't run custom code in the canvas preview.

## Ghost

Ghost admin → **Settings → Advanced → Code injection** → paste the snippet into **Site footer** → **Save**.

## Joomla

1. Joomla admin → **System → Site Templates**, open your template.
2. Open `index.php` and paste the snippet right before `</body>`.
3. **Save & Close**. A template update can overwrite the file; paste it again after one.

## Drupal

1. Install the [Asset Injector](https://www.drupal.org/project/asset_injector) module.
2. Add a **JS Injector** (Configuration → Development → Asset Injector).
3. Paste the [JavaScript-only](#the-snippet) version of the snippet and save.

## Magento and Adobe Commerce

1. Admin → **Content → Design → Configuration**, edit your store view.
2. Expand **HTML Head → Scripts and Style Sheets**, paste the snippet, **Save Configuration**. This field goes into `<head>`, which is fine: the script is `async`.
3. Flush the cache: **System → Cache Management**.

Adobe Commerce enforces a Content-Security-Policy on checkout pages. For the chat to run there too, add the hosts under [Content-Security-Policy](#content-security-policy) to your module's `csp_whitelist.xml`.

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

For a component with a `useReplyze()` hook for your own buttons and typed events, use [react-live-chat](https://github.com/Replyze/react-live-chat). Without a package, the simplest way is the HTML file every page loads: paste the snippet before `</body>` in `index.html` (Vite) or `public/index.html` (Create React App).

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

[react-live-chat](https://github.com/Replyze/react-live-chat) works with both routers. Without a package, `next/script` is enough.

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

`next/script` passes `data-token` on to the script tag, and loads the script once however the visitor navigates. To keep the token in an environment variable, use `data-token={process.env.NEXT_PUBLIC_REPLYZE_TOKEN}`.

## Vue

Paste the snippet before `</body>` in `index.html` (Vite). The chat stays across Vue Router navigation. For a component, use [vue-live-chat](https://github.com/Replyze/vue-live-chat).

## Nuxt

[vue-live-chat](https://github.com/Replyze/vue-live-chat) covers Nuxt too. Without a package, `nuxt.config.ts`:

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

## Mobile apps

The same chat runs inside an app, full screen, with these packages:

- **React Native and Expo:** [react-native-live-chat](https://github.com/Replyze/react-native-live-chat)
- **Flutter (iOS and Android):** [flutter-live-chat](https://github.com/Replyze/flutter-live-chat)

## Single-page apps

Load the snippet once, in the HTML shell or the root layout. The chat lives at the end of `<body>` and stays there while your router swaps the page content. It notices route changes by itself (`pushState`, `replaceState`, back and forward) and records them as page views, so you don't need to call anything when the route changes. If the script tag ends up on the page twice, only one chat starts.

A framework that replaces the whole `<body>` on navigation removes the chat with it. Turbo Drive does this: see [Ruby on Rails](#ruby-on-rails) for the fix.

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

Other calls: `Replyze.close()`, `Replyze.toggle()`, `Replyze.hide()`, `Replyze.show()`, and events with `Replyze.on(name, callback)`: `open`, `close`, `message:sent`, `message:received`, `unread` (the unread count, for a badge on your button). The `ready` event fires while the widget starts, before `on()` can be called, so it never reaches a listener: queue the calls you want to run at start, as above. Everything the JavaScript API can do: [Replyze docs](https://github.com/Replyze/replyze#2-javascript-api).

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

This only labels the visitor. So that nobody can chat as someone else, sign the user on your server and pass the signature: [identity verification](https://github.com/Replyze/replyze#3-identity-verification). The [WordPress plugin](https://github.com/Replyze/wordpress-live-chat) and [react-live-chat](https://github.com/Replyze/react-live-chat) have it built in.

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

`Replyze.setTracking(false)` turns it off again and removes the tracking cookie. With the one-tag snippet, start with tracking off with `data-tracking="false"`.

## Content-Security-Policy

If your site sends a `Content-Security-Policy` header, add these sources to it:

```
script-src  https://cdn.replyze.chat
connect-src https://client.replyze.chat wss://client.replyze.chat
style-src   'unsafe-inline'
img-src     https: data: blob:
media-src   https://client.replyze.chat data: blob:
```

| Directive | Why the chat needs it |
|---|---|
| `script-src https://cdn.replyze.chat` | `widget.js` itself. The two-tag snippet also has an inline script, which needs `'unsafe-inline'` or a nonce; the [one-tag form](#the-snippet) doesn't. |
| `connect-src https://client.replyze.chat` | The chat's API: settings, messages, uploads, page views. |
| `connect-src wss://client.replyze.chat` | The live connection that brings replies in as they are sent. |
| `style-src 'unsafe-inline'` | The chat puts its styles in `<style>` elements inside its own shadow DOM. Without it, the chat loads unstyled. |
| `img-src https: data: blob:` | Avatars can come from any `https` host you set in the dashboard; `data:` for small icons in the chat's styles; `blob:` for the preview of a picture the visitor attaches. |
| `media-src https://client.replyze.chat data: blob:` | Voice messages (`client.replyze.chat`), the new-message sound (`data:`), and playing back a voice message before sending it (`blob:`). |

The chat needs no `frame-src` (it uses no iframe) and no `font-src` (it loads no fonts). With these sources, the one-tag snippet loads with no CSP violation in Chromium; without `'unsafe-inline'` in `style-src` the launcher renders unstyled, and without the `connect-src` hosts the chat can't reach its settings.

## Troubleshooting

**The chat doesn't appear.** Open the browser's developer tools.

- Console says `[Replyze] No config found`: the token didn't reach the page. Check that the snippet is there and has `data-token` (or `window.ReplyzeConfig.token`).
- Console shows a Content Security Policy error: add the sources under [Content-Security-Policy](#content-security-policy).
- Network tab shows a request to `client.replyze.chat/api/w/.../config` answered with `403` and `DOMAIN_NOT_ALLOWED` (the console also shows a CORS error): the site isn't on the widget's allowed domains. See the next point.
- No request to `cdn.replyze.chat/widget.js` at all: the page you're looking at doesn't have the snippet (another template, a cached page, a tag manager container that isn't published).

**It works on one domain but not another.** The widget's **Allowed domains** list (Settings → Chat Widget) decides which sites can show it:

- An empty list allows every site.
- Entries are host names; a scheme, path or port in an entry is ignored, so `https://example.com/shop` counts as `example.com`.
- `example.com` matches only `example.com`, not `www.example.com`.
- `*.example.com` matches `example.com` and every subdomain of it.
- For a local test, add `localhost`.

**Only some visitors don't see it.** Usually a browser extension that blocks chat widgets or scripts from other domains. The chat's own API paths avoid the words common filter lists block ("track", "heartbeat"), but an extension can still block `widget.js` itself. Try a private window with extensions off to tell.

**It shows late.** A cache or optimization plugin, or a tag manager rule, is delaying scripts until the visitor interacts (WP Rocket's "Delay JavaScript execution", for example). Exclude `cdn.replyze.chat/widget.js`.

**It disappears after a route change.** The chat survives client-side routing (`pushState`, back and forward), but not a framework that replaces the whole `<body>`. On Rails with Turbo Drive, add the script under [Ruby on Rails](#ruby-on-rails).

**Two chats, or the chat starts twice.** It can't: a second copy of the snippet finds the running chat and stops. If you see two bubbles, one of them is another chat tool.

---

Tested in Chromium against the live widget (`cdn.replyze.chat/widget.js`) on 13 November 2026: the three embed forms, the button queue, the script loaded twice, the tracking switch, the Content-Security-Policy above (and what breaks without each part), the Turbo Drive script, the Next.js App Router snippet (Next.js 16.4) and the Nuxt snippet (Nuxt 4.6). The platform menus follow each platform's help pages as of the same date. Spotted a platform that is missing or a menu that moved? Open an issue or a pull request.

More: [the full guide on our site](https://replyze.chat/answers/how-to-add-live-chat-to-website?utm_source=github&utm_medium=add-live-chat-to-website&utm_content=footer) · [Replyze docs](https://github.com/Replyze/replyze) · [MCP server](https://github.com/Replyze/replyze-mcp) · [pricing](https://replyze.chat/pricing?utm_source=github&utm_medium=add-live-chat-to-website&utm_content=footer)

## License

MIT, see [LICENSE](LICENSE).
