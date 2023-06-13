import React from "react";

const Profile = () => {
  return (
    <div class="paper">
      <div class="grid-x grid-margin-x">
        <div class="cell large-4">
          <div class="media-object mb-2" data-poison="">
            <div class="media-object-section mb-1 js-toggle-profile">
              <div class="text-center">
                <div class="avatar avatar--">
                  <img
                    onerror="replaceWithMonogram(this);"
                    class="monogram__hider border-thick avatar__user-image x-deferred-image-initialized"
                    ue="deferred-image"
                    alt="shahnwaz a."
                    title="shahnwaz a."
                    data-deferred-image-src="https://lh3.googleusercontent.com/a-/AOh14Gh3LntUvYi9--I377qpoT8jMpPkvC3Hpt_NgQItYg=s96-c"
                    height="76"
                    width="76"
                    src="https://lh3.googleusercontent.com/a-/AOh14Gh3LntUvYi9--I377qpoT8jMpPkvC3Hpt_NgQItYg=s96-c"
                  />
                  <div class="avatar__monogram">
                    <span>SA</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="media-object-section">
              <h2 class="l3 mb-0" data-poison-name="">
                <span
                  ue="safe-name"
                  data-safe-name-id="055e3337-7104-4b0c-8625-790c574a78c2"
                  class="x-safe-name-initialized"
                >
                  User Name
                </span>
              </h2>
              <span
                data-ue-widget="best-in-place"
                data-bip-type="input"
                data-bip-attribute="headline"
                data-bip-placeholder="Click here to edit"
                data-bip-object="user"
                data-bip-skip-blur="false"
                data-bip-url="/users/055e3337-7104-4b0c-8625-790c574a78c2"
                class="best_in_place blank bip-placeholder x-best-in-place-initialized"
                id="best_in_place_user_3446840_headline"
              >
                Click here to edit
              </span>
              <div class="text-small">
                Member Since <span>April 09, 2022</span>
              </div>
            </div>
          </div>
          <div class="js-toggle-profile js-is-hidden">
            <form
              class="new_avatar"
              id="new_avatar"
              action="/avatars"
              accept-charset="UTF-8"
              method="post"
            >
              <input name="utf8" type="hidden" value="✓" autocomplete="off" />
              <input
                type="hidden"
                name="authenticity_token"
                value="tXw3uzvkSwKMqWxa7wAsRU2lAfoPhMqg1NPGiTIb0EcQoO1pDlHDe0lLFUCbttTJpF5BKqc6fBO1FpARdU1wkw"
                autocomplete="off"
              />
              <div
                data-file-upload-listener-drop-zone=".drop-zone"
                data-file-upload-listener-form-id="75f2cfcc-240c-4069-b35b-47821f021d35"
                ue="file-upload-listener"
                class="x-file-upload-listener-initialized"
              >
                <label
                  class="cursor-pointer"
                  for="file-upload-input-75f2cfcc-240c-4069-b35b-47821f021d35"
                >
                  <div class="user-profile__avatar--edit text-center position-relative drop-zone">
                    <img
                      onerror="replaceWithAvatar(this);"
                      class="js-upload-preview detail-logo user-profile__avatar"
                      src="/assets/avatar-87e95027f4b1f119bd712b28fd956007a7c84905ba9970fd6cd76eb11fc8d8ad.png"
                    />
                    <input
                      class="js-upload-done"
                      autocomplete="off"
                      type="hidden"
                      name="avatar[delayed_image]"
                      id="avatar_delayed_image"
                    />
                    <input
                      value="3446840"
                      autocomplete="off"
                      type="hidden"
                      name="avatar[user_id]"
                      id="avatar_user_id"
                    />
                  </div>
                  <div class="js-progress-container mt-1"></div>
                </label>
              </div>
              <input type="submit" />
              <a
                ue="toggle-class"
                data-toggle-class-targets=".js-toggle-profile"
                data-toggle-class-value="js-is-hidden"
                data-toggle-class-prevent-default="true"
                class="btn btn--plain x-toggle-class-initialized"
                href="#"
              >
                Cancel
              </a>
            </form>
          </div>
          <div
            class="js-is-hidden x-file-upload-initialized"
            data-file-upload-id="75f2cfcc-240c-4069-b35b-47821f021d35"
            ue="file-upload"
          >
            <form class="new_direct_uploader" id="new_direct_uploader">
              <input name="utf8" type="hidden" value="✓" autocomplete="off" />
              <input
                type="hidden"
                name="key"
                value="expirable-direct-uploads/3106bfd7-41a0-427a-a4f8-bbb812c4b935/${filename}"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="acl"
                value="public-read"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="success_action_status"
                value="201"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="policy"
                value="eyJleHBpcmF0aW9uIjoiMjAyMi0wNC0yNVQxMDozMzo1OFoiLCJjb25kaXRpb25zIjpbeyJidWNrZXQiOiJpbWFnZXMuZzJjcm93ZC5jb20ifSxbInN0YXJ0cy13aXRoIiwiJGtleSIsImV4cGlyYWJsZS1kaXJlY3QtdXBsb2Fkcy8zMTA2YmZkNy00MWEwLTQyN2EtYTRmOC1iYmI4MTJjNGI5MzUvIl0seyJhY2wiOiJwdWJsaWMtcmVhZCJ9LFsic3RhcnRzLXdpdGgiLCIkdXRmOCIsIiJdLFsic3RhcnRzLXdpdGgiLCIkQ29udGVudC1UeXBlIiwiIl0sWyJjb250ZW50LWxlbmd0aC1yYW5nZSIsMSwyNjIxNDQwMF0seyJzdWNjZXNzX2FjdGlvbl9zdGF0dXMiOiIyMDEifSx7IngtYW16LWNyZWRlbnRpYWwiOiJBS0lBV1NWRFZZVktGSU1HUlJDWS8yMDIyMDQyNS91cy1lYXN0LTEvczMvYXdzNF9yZXF1ZXN0In0seyJ4LWFtei1hbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJ4LWFtei1kYXRlIjoiMjAyMjA0MjVUMDkzMzU4WiJ9XX0="
                autocomplete="off"
              />
              <input
                type="hidden"
                name="x-amz-credential"
                value="AKIAWSVDVYVKFIMGRRCY/20220425/us-east-1/s3/aws4_request"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="x-amz-algorithm"
                value="AWS4-HMAC-SHA256"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="x-amz-date"
                value="20220425T093358Z"
                autocomplete="off"
              />
              <input
                type="hidden"
                name="x-amz-signature"
                value="682b2f2f0761419c3565b905f5193e8ad1e14de74063351059b3318bd37c5235"
                autocomplete="off"
              />
              <input
                name="Content-Type"
                autocomplete="off"
                type="hidden"
                value="binary/octet-stream"
              />
              <input
                accept="image/jpeg,image/png,image/gif"
                id="file-upload-input-75f2cfcc-240c-4069-b35b-47821f021d35"
                name="file"
                type="file"
              />
            </form>
          </div>
        </div>
        <div class="user-profile__btn-wrapper">
          <a
            ue="toggle-class"
            data-toggle-class-targets=".js-toggle-profile"
            data-toggle-class-value="js-is-hidden"
            data-toggle-class-prevent-default="true"
            class="js-toggle-profile btn btn--hollow btn--gray x-toggle-class-initialized"
            href="#"
          >
            Update Image
          </a>
        </div>
      </div>
      <div class="cell large-8 fw-semibold">
        <div class="js-toggle-profile js-is-hidden">
          <div class="c-purple-100 mb-2 mt-1">Image Upload Tips:</div>
          <div class="mb-half">
            The best profile images are clear, professional-looking, well-lit
            photos of yourself.
          </div>
          <div class="mb-half">
            Do not use company logos, heavily-filtered, group, or stock photos.
          </div>
          <div class="c-rorange-100 mb-half">
            All avatars must pass our moderation process before they are
            published. We reserve the right to remove any profile photos that do
            not meet the Terms of Use and minimum quality standards.
          </div>
          <div class="mb-half">JPG or PNG format</div>
          <div class="mb-half">Minimum 200x200 pixels</div>
          <div class="mb-half">Max file size 5MB</div>
        </div>
      </div>
      <div class="cell large-4"></div>
    </div>
  );
};

export default Profile;
