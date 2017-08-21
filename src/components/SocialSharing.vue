<template>
    <social-sharing url="url" inline-template>
        <div>
            <network network="facebook">
            <i class="fa fa-fw fa-facebook"></i> Facebook
            </network>
            <network network="googleplus">
            <i class="fa fa-fw fa-google-plus"></i> Google +
            </network>
            <network network="linkedin">
            <i class="fa fa-fw fa-linkedin"></i> LinkedIn
            </network>
            <network network="pinterest">
            <i class="fa fa-fw fa-pinterest"></i> Pinterest
            </network>
            <network network="reddit">
            <i class="fa fa-fw fa-reddit"></i> Reddit
            </network>
            <network network="twitter">
            <i class="fa fa-fw fa-twitter"></i> Twitter
            </network>
            <network network="vk">
            <i class="fa fa-vk"></i> VKontakte
            </network>
            <network network="weibo">
            <i class="fa fa-weibo"></i> Weibo
            </network>
            <network network="whatsapp">
            <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
            </network>
        </div>
</social-sharing>
</template>

<script>
export default {
  name: 'socialSharing',
  props: {
    url: {
      type: String,
      required: true
    }
  }
}
</script>