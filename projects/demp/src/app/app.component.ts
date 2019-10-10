import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  surveyFile = {
    survey_settings: {
      is_live: 1,
      languages: [
        {
          code: "def",
          is_primary: 1,
          logo:
            "https://storage.googleapis.com/mitra-images/languages/germany.svg",
          name: "Deutsch (formal)"
        }
      ],
      selectedLanguage: {
        code: "def",
        is_primary: 1,
        logo:
          "https://storage.googleapis.com/mitra-images/languages/germany.svg",
        name: "Deutsch (formal)"
      },
      show_progress: true,
      test_mode: 0,
      survey_title: "EVENTIM-Webshop Umfrage"
    },
    survey_styles: {
      name: "old survey",
      font: "Roboto",
      question_number_color: "rgba(0, 0, 0, 1)",
      question_text_color: "#000000",
      answer_text_color: "#000000",
      button_color: "#2F7AF7",
      button_text_color: "#ffffff",
      background_color: "#000000",
      background_image:
        "https://storage.googleapis.com/mitra-prod-api/eventPeriod/5/42925a75075ef465a1e7a153aaf44ea9.jpg",
      opacity: 0.7
    },
    targetQuestions: [
      {
        front_id: "3da2c5d3-9e01-4c6c-b440-cd8e22c0c8c5",
        reference_id: "91079801-1885-4f5a-8167-53ef641a6103",
        question_type_id: 11,
        question_type: {
          title: "NPS",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-happy-96.png",
          description:
            "Questionee can answer a NPS question with a number on a scale from 0 - 10",
          id: 11,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            }
          ],
          settingsType: "BASE_SETTINGS",
          color: "#FFD9D9"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "3da2c5d3-9e01-4c6c-b440-cd8e22c0c8c5",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f424",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "NPS",
        wordings: [
          {
            id: "97885798-76f3-45de-8a94-1af9dbdbd411",
            lang_code: "en",
            text:
              '<p><span style="color: rgb(86, 88, 103);">How likely are you to recommend eventim.de to a friend or colleague?&nbsp;</span></p>',
            question_id: 716,
            option_id: null
          },
          {
            id: "8faabf82-db72-45ff-aa24-0bea913fb095",
            lang_code: "nl",
            text:
              '<p><span style="color: rgb(86, 88, 103);">Hoe waarschijnlijk is het dat u #FILLED zou aanbevelen aan een vriend of collega?&nbsp;</span></p>',
            question_id: 716,
            option_id: null
          },
          {
            id: "f573bae4-a56c-4f00-b4e7-36bd891f9511",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(86, 88, 103);">Wie wahrscheinlich ist es, dass du #FILLED einem Freund oder Kollegen weiterempfehlen wirst?</span></p>',
            question_id: 716,
            option_id: null
          },
          {
            id: "6cd16b0d-3333-4fbe-bda6-0ea77ff01d05",
            lang_code: "fi",
            text:
              '<p><span style="color: rgb(86, 88, 103);">Kuinka todennäköisesti suosittelisit #FILLED ystävälle tai kollegalle?&nbsp;</span></p>',
            question_id: 716,
            option_id: null
          },
          {
            id: "66154221-da9b-4f86-a4a9-def1e3ea66a2",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(86, 88, 103);">Wie wahrscheinlich ist es, dass Sie eventim.de einem Freund oder Kollegen weiterempfehlen?&nbsp;</span></p>',
            question_id: 716,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          labels: [
            {
              id: "",
              front_id: "ecb6ff1b-03f5-4330-a48f-808d91b5670e",
              scale: 1,
              wordings: [
                {
                  front_id: "bb83cbe0-cfa6-425e-a2fe-b33eeeacf36b",
                  lang_code: "def",
                  text: ""
                }
              ]
            },
            {
              id: "",
              front_id: "5fdbb03a-8747-4564-8539-ba95e8d43be2",
              scale: 2,
              wordings: [
                {
                  front_id: "77e0d262-8fc6-446c-a8bd-8c27b7be7866",
                  lang_code: "def",
                  text: ""
                }
              ]
            },
            {
              id: "",
              front_id: "0e5394be-13b6-452f-9635-26c631662126",
              scale: 3,
              wordings: [
                {
                  front_id: "52d9be10-dbe8-496e-a886-28e73b790ee1",
                  lang_code: "def",
                  text: ""
                }
              ]
            }
          ]
        },
        old_id: 716,
        seq: 1
      },
      {
        front_id: "ceb64030-1751-425d-b1fa-d611f04b9fb5",
        reference_id: "efbb25fe-5c40-4847-b161-6ca021838327",
        question_type_id: 2,
        question_type: {
          title: "Multiple Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-to-do-96.png",
          description: "Questionee can select multiple options",
          id: 2,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Maximum answer",
              name: "max_selection",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "MULTIPLE_CHOICE_SETTINGS",
          color: "#F7CCAC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "ceb64030-1751-425d-b1fa-d611f04b9fb5",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f42c",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "Heard about",
        wordings: [
          {
            id: "ca3eee09-e3a0-46a3-9d13-7d69ca3dd839",
            lang_code: "en",
            text:
              "<p>How did you learn about the eventim.de? Select up to 3 answers, whatever comes to your mind first.</p>",
            question_id: 112,
            option_id: null
          },
          {
            id: "18bb62a8-b1ed-440f-b3ef-81064bc5bdd5",
            lang_code: "nl",
            text:
              "<p>Hoe wist je van het festival? Kies max. 3 opties, die het eerst in je opkomen.</p>",
            question_id: 112,
            option_id: null
          },
          {
            id: "ed5d84a7-ec56-477e-91de-1056cdc9c92e",
            lang_code: "de",
            text:
              "<p>Wie hast Du vom Event erfahren? Wähle bis zu drei Antwortmöglichkeiten aus, die Dir als erstes in den Sinn kommen.</p>",
            question_id: 112,
            option_id: null
          },
          {
            id: "49526683-4a1f-4bdc-8977-dadf3a83a3c6",
            lang_code: "fi",
            text:
              "<p>Miten sait tietää festivaalista? Voit valita enintään kolme vastausta - valitse ne vaihtoehdot, jotka tulevat mieleesi ensimmäisenä.</p>",
            question_id: 112,
            option_id: null
          },
          {
            id: "83a1a75f-999e-4a66-ad42-715b2cb865f8",
            lang_code: "def",
            text:
              "<p>Wie sind Sie auf eventim.de aufmerksam geworden? (Mehrere Antworten möglich)</p>",
            question_id: 112,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          max_selection: null,
          options: [
            {
              id: "ae501cd1-0d1d-455a-a511-99de21491c90",
              old_id: 1700,
              wordings: [
                {
                  id: "a99afdb4-0f9d-4efe-82de-7fba82ebb5bb",
                  lang_code: "en",
                  text: "Internet ads (without social media and blogs)",
                  question_id: null,
                  option_id: 1700
                },
                {
                  id: "cae797d0-8218-41f2-a1b5-0de345cb9f20",
                  lang_code: "nl",
                  text: "internetadvertenties (buiten sociale media en blogs)",
                  question_id: null,
                  option_id: 1700
                },
                {
                  id: "43ad9dd6-f5f6-41af-8f27-ad62aa400e1f",
                  lang_code: "de",
                  text: "Internet Werbung (ohne Soziale Medien und Blogs)",
                  question_id: null,
                  option_id: 1700
                },
                {
                  id: "06314f46-ea9d-4428-b96a-bbe4f6e40c10",
                  lang_code: "fi",
                  text:
                    "mainokset internetissä (poislukien sosiaalinen media ja blogit)",
                  question_id: null,
                  option_id: 1700
                },
                {
                  id: "9c4db0db-c003-4c2f-b566-058dd4a8ffa4",
                  lang_code: "def",
                  text: "Internet Werbung (ohne Soziale Medien und Blogs)",
                  question_id: null,
                  option_id: 1700
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "c2f0cfa8-e095-475b-88f2-376295ace6e7",
              front_id: "ae501cd1-0d1d-455a-a511-99de21491c90"
            },
            {
              id: "814e99a5-e325-4376-9f27-e6e8da39e382",
              old_id: 1701,
              wordings: [
                {
                  id: "f0c32690-2525-49dd-86b6-ddf693d845d2",
                  lang_code: "en",
                  text: "Blog",
                  question_id: null,
                  option_id: 1701
                },
                {
                  id: "40cae519-b33c-4528-b10b-6b6f134f5e39",
                  lang_code: "nl",
                  text: "blog",
                  question_id: null,
                  option_id: 1701
                },
                {
                  id: "1aa3e076-56bc-4306-9ad7-2ca280a0b519",
                  lang_code: "de",
                  text: "Blog",
                  question_id: null,
                  option_id: 1701
                },
                {
                  id: "073977f3-094f-4238-a928-feceee8dd208",
                  lang_code: "fi",
                  text: "blogi",
                  question_id: null,
                  option_id: 1701
                },
                {
                  id: "5f0915f9-6e38-4a18-a15c-ca1479c6357c",
                  lang_code: "def",
                  text: "Blog",
                  question_id: null,
                  option_id: 1701
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "b412317b-ec22-44a5-b5ae-1181639cc24a",
              front_id: "814e99a5-e325-4376-9f27-e6e8da39e382"
            },
            {
              id: "00492910-5f0f-4d44-8b66-f76f2c959786",
              old_id: 1702,
              wordings: [
                {
                  id: "4f585063-1887-4ad7-a4eb-ad11a6d773c1",
                  lang_code: "en",
                  text: "Social media",
                  question_id: null,
                  option_id: 1702
                },
                {
                  id: "3638f224-cfcb-4fef-9c6e-c76075b1f15b",
                  lang_code: "nl",
                  text: "sociale media",
                  question_id: null,
                  option_id: 1702
                },
                {
                  id: "ad601dba-f4e9-479c-a13d-1a09afcc3759",
                  lang_code: "de",
                  text: "Soziale Medien",
                  question_id: null,
                  option_id: 1702
                },
                {
                  id: "f80c7802-e00a-4183-94fd-05bb9d2775a8",
                  lang_code: "fi",
                  text: "sosiaalinen media",
                  question_id: null,
                  option_id: 1702
                },
                {
                  id: "d1caeeb4-c67e-45ae-87a8-1c0e02c4bfee",
                  lang_code: "def",
                  text: "Soziale Medien",
                  question_id: null,
                  option_id: 1702
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "4bb80303-7d9d-4569-8394-10b705d67c1f",
              front_id: "00492910-5f0f-4d44-8b66-f76f2c959786"
            },
            {
              id: "3066228f-209f-438a-af1b-bf8221292bbd",
              old_id: 1703,
              wordings: [
                {
                  id: "52557b2b-0a4e-4296-8afe-716ac5496411",
                  lang_code: "en",
                  text: "Post from celebrity",
                  question_id: null,
                  option_id: 1703
                },
                {
                  id: "e2e3974d-8fee-41c5-a04c-41c650590bf0",
                  lang_code: "nl",
                  text: "een online post van een bekende persoon",
                  question_id: null,
                  option_id: 1703
                },
                {
                  id: "e9370517-69a0-44cb-9c88-4a19ebc76678",
                  lang_code: "de",
                  text: "Geteilter Inhalt von bekannter Persönlichkeit",
                  question_id: null,
                  option_id: 1703
                },
                {
                  id: "704a711c-4fa4-4f95-973c-13f9d3731784",
                  lang_code: "fi",
                  text: "julkkiksen päivitys",
                  question_id: null,
                  option_id: 1703
                },
                {
                  id: "5644604f-2a02-43cd-ada5-da9e6cf9c3ee",
                  lang_code: "def",
                  text: "Geteilter Inhalt von bekannter Persönlichkeit",
                  question_id: null,
                  option_id: 1703
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "d7597744-6d22-49c1-a2fe-86ed9012af57",
              front_id: "3066228f-209f-438a-af1b-bf8221292bbd"
            },
            {
              id: "b5048284-2b9c-4620-a1ea-ccbfae771a37",
              old_id: 1704,
              wordings: [
                {
                  id: "b6113505-7ae3-4357-9899-5035cdd1e81b",
                  lang_code: "en",
                  text: "Friends or family",
                  question_id: null,
                  option_id: 1704
                },
                {
                  id: "75c49368-664d-40ea-a401-a078bd558b0f",
                  lang_code: "nl",
                  text: "vienden of familie",
                  question_id: null,
                  option_id: 1704
                },
                {
                  id: "90ff108a-0299-4e13-b600-cefc44f7677e",
                  lang_code: "de",
                  text: "Familie, Freunde oder Bekannte",
                  question_id: null,
                  option_id: 1704
                },
                {
                  id: "61cccd00-52ee-49e2-8361-e72b1604406d",
                  lang_code: "fi",
                  text: "ystävät tai perhe",
                  question_id: null,
                  option_id: 1704
                },
                {
                  id: "7cc739ab-a77b-4594-a97f-3b924a6838cd",
                  lang_code: "def",
                  text: "Familie, Freunde oder Bekannte",
                  question_id: null,
                  option_id: 1704
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "2392e4f0-55f6-4677-a898-bcdd40b9bb98",
              front_id: "b5048284-2b9c-4620-a1ea-ccbfae771a37"
            },
            {
              id: "a091a35a-cb44-4d79-8027-971e8d8a9b02",
              old_id: 1705,
              wordings: [
                {
                  id: "080fd5ed-693f-444e-b03c-06f09f49b745",
                  lang_code: "en",
                  text: "Flyer / poster",
                  question_id: null,
                  option_id: 1705
                },
                {
                  id: "7973ee00-cfde-4ac8-bd52-0bab66970cf1",
                  lang_code: "nl",
                  text: "flyer / posters",
                  question_id: null,
                  option_id: 1705
                },
                {
                  id: "15279376-a3d6-45cf-8016-190d0e92c1eb",
                  lang_code: "de",
                  text: "Flyer / Poster",
                  question_id: null,
                  option_id: 1705
                },
                {
                  id: "f0c1d147-3379-420d-a42b-1e9f5da5d54d",
                  lang_code: "fi",
                  text: "lentolehtinen / juliste",
                  question_id: null,
                  option_id: 1705
                },
                {
                  id: "7e5a4abe-fe89-4a5a-acae-8d14b0dadc69",
                  lang_code: "def",
                  text: "Flyer / Poster",
                  question_id: null,
                  option_id: 1705
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "07a95eca-2ed3-4e9c-9fc7-9fe4c59f38e5",
              front_id: "a091a35a-cb44-4d79-8027-971e8d8a9b02"
            },
            {
              id: "ffe4d12d-705f-43a4-bb81-5d068b3c6afe",
              old_id: 1706,
              wordings: [
                {
                  id: "1dc7d968-9ea2-4cd0-8e58-a837f30e0612",
                  lang_code: "en",
                  text: "Newspaper / magazine",
                  question_id: null,
                  option_id: 1706
                },
                {
                  id: "0c845e59-a302-44b2-b2f9-8a501bf3fb83",
                  lang_code: "nl",
                  text: "krant / tijdschrift",
                  question_id: null,
                  option_id: 1706
                },
                {
                  id: "a65b2f55-fca7-426f-92ca-ec484068e0d8",
                  lang_code: "de",
                  text: "Zeitung / Magazin",
                  question_id: null,
                  option_id: 1706
                },
                {
                  id: "aa981f3f-d6f4-4edd-a917-04ee853b7844",
                  lang_code: "fi",
                  text: "sanomalehti / aikakauslehti",
                  question_id: null,
                  option_id: 1706
                },
                {
                  id: "d7f22b09-21aa-48b9-87da-ec5243de0ba5",
                  lang_code: "def",
                  text: "Zeitung / Magazin",
                  question_id: null,
                  option_id: 1706
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "cc5ce75f-f4f6-4cf8-b874-7c2d2a77f167",
              front_id: "ffe4d12d-705f-43a4-bb81-5d068b3c6afe"
            },
            {
              id: "ffde2bff-d7c2-4098-b798-2bb9e04ab5f1",
              old_id: 1707,
              wordings: [
                {
                  id: "6e263b03-efef-4458-85b6-091e5ab93358",
                  lang_code: "en",
                  text: "Radio",
                  question_id: null,
                  option_id: 1707
                },
                {
                  id: "ad9d77b0-cc1c-4122-88a7-89e6299debaa",
                  lang_code: "nl",
                  text: "radio",
                  question_id: null,
                  option_id: 1707
                },
                {
                  id: "7a28e511-54c4-4cfb-a693-ee41a1d366d5",
                  lang_code: "de",
                  text: "Radio",
                  question_id: null,
                  option_id: 1707
                },
                {
                  id: "cd137b7a-fc42-42b2-a4a6-b1ced893834c",
                  lang_code: "fi",
                  text: "radio",
                  question_id: null,
                  option_id: 1707
                },
                {
                  id: "2469df12-f2a6-4d16-bc9a-a3d05a15c85a",
                  lang_code: "def",
                  text: "Radio",
                  question_id: null,
                  option_id: 1707
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "da8012e1-eb0e-4216-9fec-f5784a29a1f1",
              front_id: "ffde2bff-d7c2-4098-b798-2bb9e04ab5f1"
            },
            {
              id: "84a881b9-84aa-44c1-8549-e6d2f2f113b7",
              old_id: 1708,
              wordings: [
                {
                  id: "515a888f-16d0-431f-b91c-5c32b89e77f1",
                  lang_code: "en",
                  text: "TV",
                  question_id: null,
                  option_id: 1708
                },
                {
                  id: "5b7f0dca-7f35-4850-b868-89111c1be40b",
                  lang_code: "nl",
                  text: "tv",
                  question_id: null,
                  option_id: 1708
                },
                {
                  id: "ec8cee92-6aaa-4de8-9899-30f3d27d7415",
                  lang_code: "de",
                  text: "Fernsehen",
                  question_id: null,
                  option_id: 1708
                },
                {
                  id: "1f2f055f-3c59-4db2-9c86-b4a8badb7910",
                  lang_code: "fi",
                  text: "tv",
                  question_id: null,
                  option_id: 1708
                },
                {
                  id: "14c614b7-9036-48cb-8641-bd97cf629de3",
                  lang_code: "def",
                  text: "Fernsehen",
                  question_id: null,
                  option_id: 1708
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "b25e812f-3d61-4766-89c1-eb8939f99d2a",
              front_id: "84a881b9-84aa-44c1-8549-e6d2f2f113b7"
            },
            {
              id: "c377503a-016f-4e43-b684-2831c718aa93",
              old_id: 1709,
              wordings: [
                {
                  id: "a3d393dd-d3a5-457b-865c-372d9ff9ccd8",
                  lang_code: "en",
                  text: "I have known the festival for a long time",
                  question_id: null,
                  option_id: 1709
                },
                {
                  id: "2a1f21c7-a552-4a02-84ca-77af4c5402a8",
                  lang_code: "nl",
                  text: "Ik ken het festival al lang.",
                  question_id: null,
                  option_id: 1709
                },
                {
                  id: "fcdfbcce-5f32-47a0-a0ee-d0653b7a9fa1",
                  lang_code: "de",
                  text: "Ich kenne das Festival schon lange",
                  question_id: null,
                  option_id: 1709
                },
                {
                  id: "aac466e7-4761-4758-bb97-47982887b303",
                  lang_code: "fi",
                  text: "Olen ollut tietoinen festivaalista pitkän aikaa",
                  question_id: null,
                  option_id: 1709
                },
                {
                  id: "16a8d61e-6524-46a1-bc4c-6b4d0348d70f",
                  lang_code: "def",
                  text: "Ich kenne das Festival schon lange",
                  question_id: null,
                  option_id: 1709
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "39b5e3e9-8515-4818-b043-d263c8d5ed61",
              front_id: "c377503a-016f-4e43-b684-2831c718aa93"
            },
            {
              id: "2ddb8428-1a63-4a5f-ad5b-687296ac6b3d",
              old_id: 4369,
              wordings: [
                {
                  id: "dc44fda8-2190-4a24-87c4-844288a344c4",
                  lang_code: "en",
                  text: "Artist's website",
                  question_id: null,
                  option_id: 4369
                },
                {
                  id: "a9c938cd-0956-4e79-b791-94d2094722b1",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4369
                },
                {
                  id: "3c843b79-733a-4bdc-83bf-094ffe9e062e",
                  lang_code: "de",
                  text: "Webseite des Künstlers",
                  question_id: null,
                  option_id: 4369
                },
                {
                  id: "67a6bd50-eb24-4975-a550-10a3901ca874",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4369
                },
                {
                  id: "5657f043-65d6-4e81-962f-c006f03d76d7",
                  lang_code: "def",
                  text: "Webseite des Künstlers",
                  question_id: null,
                  option_id: 4369
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "1781ca66-2ac8-4160-9171-d932966dbe0e",
              front_id: "2ddb8428-1a63-4a5f-ad5b-687296ac6b3d"
            },
            {
              id: "262c2604-b08d-4276-97d1-fe18aa0b89a4",
              old_id: 4370,
              wordings: [
                {
                  id: "ea983957-6931-4769-93b9-d1813ced8d84",
                  lang_code: "en",
                  text: "Organiser's website",
                  question_id: null,
                  option_id: 4370
                },
                {
                  id: "556d7176-e294-4819-b8c2-17e26d45da88",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4370
                },
                {
                  id: "1bb98be3-65f5-4a0f-8df2-49c88561a1f4",
                  lang_code: "de",
                  text: "Webseite des Veranstalters",
                  question_id: null,
                  option_id: 4370
                },
                {
                  id: "1fa3ca2d-3239-422a-9f5e-241985b63592",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4370
                },
                {
                  id: "4127a6a4-67cf-4e32-a2ab-2e36240fba1a",
                  lang_code: "def",
                  text: "Webseite des Veranstalters",
                  question_id: null,
                  option_id: 4370
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "dd340729-1c09-4903-b207-b6ec6c8e4820",
              front_id: "262c2604-b08d-4276-97d1-fe18aa0b89a4"
            },
            {
              id: "a1b7acb3-adae-486a-b5fe-9c9f18e4233f",
              old_id: 4619,
              wordings: [
                {
                  id: "b2c243dc-59bd-4fd1-8956-987bbcc82962",
                  lang_code: "en",
                  text:
                    "Ticket shop online (e.g. eventim.de, ticketmaster.de, reservix.de)",
                  question_id: null,
                  option_id: 4619
                },
                {
                  id: "0e18b291-33df-4433-a49f-54d116406fb2",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4619
                },
                {
                  id: "4257d940-bc9c-4991-b741-1498cb938a28",
                  lang_code: "de",
                  text:
                    "Ticket-Webshop (z.B. eventim.de, ticketmaster.de, reservix.de)",
                  question_id: null,
                  option_id: 4619
                },
                {
                  id: "4de8f7f9-f859-4236-9e43-42f277eca805",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4619
                },
                {
                  id: "9b8fb04f-1aac-4ffd-b93b-2a91ac9490fd",
                  lang_code: "def",
                  text:
                    "Ticket-Webshop (z.B. eventim.de, ticketmaster.de, reservix.de)",
                  question_id: null,
                  option_id: 4619
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "9ce8afd3-21f5-4f8d-b4c0-cd9dd8ebad56",
              front_id: "a1b7acb3-adae-486a-b5fe-9c9f18e4233f"
            },
            {
              id: "1430bc06-06d6-4727-8c26-c5be50051b7f",
              old_id: null,
              hidden: false,
              isOther: true,
              wordings: [
                {
                  id: "791a07ec-8330-499b-ac63-39e868de45ca",
                  lang_code: "en",
                  text: "other"
                },
                {
                  id: "c7a9bac6-ab78-49ea-b5fd-34c8f4ecbc1a",
                  lang_code: "de",
                  text: "andere"
                },
                {
                  id: "f22e212a-99d9-47f2-951b-da19e2f04f3f",
                  lang_code: "fi",
                  text: "muut"
                },
                {
                  id: "5d60f613-f83c-4f2c-9202-2ee90cd2fefb",
                  lang_code: "nl",
                  text: "anders"
                }
              ],
              front_id: "1430bc06-06d6-4727-8c26-c5be50051b7f"
            }
          ],
          randomized_option_order: false,
          additional_info: 1,
          additional_info_open_box: 1,
          picture_options: false,
          additional_info_picture_url: ""
        },
        old_id: 112,
        seq: 2
      },
      {
        front_id: "f48e9fad-9d70-4904-ae32-c2f01ed8397d",
        reference_id: "e9bda030-fa91-4792-abb6-50b5f261df77",
        question_type_id: 1,
        question_type: {
          title: "Single Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-tasklist-96.png",
          description: "Questionee can only select one option",
          id: 1,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            }
          ],
          settingsType: "SINGLE_CHOICE_SETTINGS",
          color: "#B3DFEF"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "f48e9fad-9d70-4904-ae32-c2f01ed8397d",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de how visited",
        wordings: [
          {
            id: "107386c2-c889-43b5-a86d-a73550a11006",
            lang_code: "en",
            text: "<p>How did you visit eventim.de today?</p>",
            question_id: 645,
            option_id: null
          },
          {
            id: "c7b3845d-2264-4e46-8eb6-17e14d0eb566",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 645,
            option_id: null
          },
          {
            id: "5e4c5f37-8a55-4882-bbc2-7027acea54ef",
            lang_code: "de",
            text: "<p>Wie hast Du eventim.de heute besucht?</p>",
            question_id: 645,
            option_id: null
          },
          {
            id: "10718c47-3df2-4b57-a6a8-a9b0862ae0de",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 645,
            option_id: null
          },
          {
            id: "dd04028e-8329-4b40-9574-bca15e610be9",
            lang_code: "def",
            text: "<p>Wie haben Sie eventim.de heute besucht?</p>",
            question_id: 645,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          options: [
            {
              id: "45be4b49-7498-4234-864e-ec3fad106913",
              old_id: 4433,
              wordings: [
                {
                  id: "3a162f3e-d3b1-4337-bc6e-433eda883f24",
                  lang_code: "en",
                  text: "Computer",
                  question_id: null,
                  option_id: 4433
                },
                {
                  id: "d84b09bf-61a3-4766-a8e3-4a033839bc44",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4433
                },
                {
                  id: "93d8fcf1-594c-40d5-9c73-3594fa127889",
                  lang_code: "de",
                  text: "Computer",
                  question_id: null,
                  option_id: 4433
                },
                {
                  id: "849a1d84-9f23-4813-ac12-c2d357c12898",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4433
                },
                {
                  id: "e4129e6c-03dc-4732-b534-5da078c0e2db",
                  lang_code: "def",
                  text: "Computer",
                  question_id: null,
                  option_id: 4433
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "7d9e49ba-5597-417f-9623-cae9e623bdd4",
              front_id: "45be4b49-7498-4234-864e-ec3fad106913"
            },
            {
              id: "d572e83c-a8bb-49c3-ae6c-66ea28e35785",
              old_id: 4434,
              wordings: [
                {
                  id: "f41e4d07-0e7c-458f-9f9c-e1e86ce8eacc",
                  lang_code: "en",
                  text: "Tablet - mobile website",
                  question_id: null,
                  option_id: 4434
                },
                {
                  id: "3b66f2f4-d4da-4fba-a838-c34fe10a01a2",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4434
                },
                {
                  id: "f7d6ed90-d98f-4da0-94d9-43445f640d62",
                  lang_code: "de",
                  text: "Tablet - mobile Webseite",
                  question_id: null,
                  option_id: 4434
                },
                {
                  id: "f52ee89d-1c7f-4aa6-8e71-35b337204965",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4434
                },
                {
                  id: "5c7b3459-cecc-4504-bce2-cd5ac4773a36",
                  lang_code: "def",
                  text: "Tablet - mobile Webseite",
                  question_id: null,
                  option_id: 4434
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "1af2d6c0-6037-48df-bd6c-765966c4fd0d",
              front_id: "d572e83c-a8bb-49c3-ae6c-66ea28e35785"
            },
            {
              id: "b0a5650b-caef-4dbd-a4ce-af8d351b6593",
              old_id: 4435,
              wordings: [
                {
                  id: "fa1205f2-799c-4981-969b-7b5b19bba09b",
                  lang_code: "en",
                  text: "Tablet - App",
                  question_id: null,
                  option_id: 4435
                },
                {
                  id: "b2e42686-76c3-4f2f-a1f3-6407fe7a616e",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4435
                },
                {
                  id: "462a3bb2-6ebd-47a0-bab3-40b076f31a4e",
                  lang_code: "de",
                  text: "Tablet - App",
                  question_id: null,
                  option_id: 4435
                },
                {
                  id: "d556c937-b524-4ea0-a3e7-1924a919764d",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4435
                },
                {
                  id: "fb668288-6304-403c-af34-1bbc7c6aa131",
                  lang_code: "def",
                  text: "Tablet - App",
                  question_id: null,
                  option_id: 4435
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "c4f06747-f7d5-44a0-994e-e9545a99974e",
              front_id: "b0a5650b-caef-4dbd-a4ce-af8d351b6593"
            },
            {
              id: "c9af2065-e933-4a16-b6d2-1290ac96f3d5",
              old_id: 4436,
              wordings: [
                {
                  id: "61c0b0aa-2894-4735-b8c8-9154bf2a4751",
                  lang_code: "en",
                  text: "Smartphone - mobile website",
                  question_id: null,
                  option_id: 4436
                },
                {
                  id: "d16820c7-7234-4943-a6cd-9cd37bafc3c9",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4436
                },
                {
                  id: "c08d5adf-eef0-4382-a70e-3d32db240a7f",
                  lang_code: "de",
                  text: "Smartphone - mobile Webseite",
                  question_id: null,
                  option_id: 4436
                },
                {
                  id: "711a96d6-5b34-438a-b24a-d4a9b0656418",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4436
                },
                {
                  id: "e61fdf88-4789-4263-a59b-3306ec6513c6",
                  lang_code: "def",
                  text: "Smartphone - mobile Webseite",
                  question_id: null,
                  option_id: 4436
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "333aa42d-c0a9-40d7-a267-89ad74e3224c",
              front_id: "c9af2065-e933-4a16-b6d2-1290ac96f3d5"
            },
            {
              id: "9c3aac39-d6c5-4e6e-bb60-bc4d0c0464ad",
              old_id: 4437,
              wordings: [
                {
                  id: "afa9ea6d-0b74-4ff9-b881-c05434a1decd",
                  lang_code: "en",
                  text: "Smartphone - App",
                  question_id: null,
                  option_id: 4437
                },
                {
                  id: "adc86e81-6011-428c-b29e-84f5c1c07b5a",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4437
                },
                {
                  id: "8ee6bc63-dfe3-4bb7-93fd-e28726d05bdb",
                  lang_code: "de",
                  text: "Smartphone - App",
                  question_id: null,
                  option_id: 4437
                },
                {
                  id: "74ba1436-7a0a-4849-96d6-87d74240200b",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4437
                },
                {
                  id: "8de39aa2-04fc-4b4d-b496-b6997f4ba40a",
                  lang_code: "def",
                  text: "Smartphone - App",
                  question_id: null,
                  option_id: 4437
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "674d744e-4e8f-4649-8cae-2bcc08a5363d",
              front_id: "9c3aac39-d6c5-4e6e-bb60-bc4d0c0464ad"
            }
          ],
          randomized_option_order: false,
          additional_info: 0,
          additional_info_open_box: 0
        },
        old_id: 645,
        seq: 3
      },
      {
        front_id: "2c76071d-25c8-4f60-950d-4695575a58f4",
        reference_id: "e26e8706-7234-49f7-bde0-1f9de41308ff",
        question_type_id: 1,
        question_type: {
          title: "Single Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-tasklist-96.png",
          description: "Questionee can only select one option",
          id: 1,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            }
          ],
          settingsType: "SINGLE_CHOICE_SETTINGS",
          color: "#B3DFEF"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "2c76071d-25c8-4f60-950d-4695575a58f4",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de first visit",
        wordings: [
          {
            id: "03b0442f-e7f7-4acd-bb57-c8beccda36aa",
            lang_code: "en",
            text: "<p>Did you visit eventim.de for the first time today?</p>",
            question_id: 646,
            option_id: null
          },
          {
            id: "9dde979d-3b0c-4326-a4cf-da26533f1a7c",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 646,
            option_id: null
          },
          {
            id: "103289ca-2890-4e16-9d43-030ed9553345",
            lang_code: "de",
            text: "<p>Hast Du eventim.de heute zum ersten Mal besucht?</p>",
            question_id: 646,
            option_id: null
          },
          {
            id: "2a093667-3dc4-4a54-8f0d-e8eb87ede2b6",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 646,
            option_id: null
          },
          {
            id: "82497f0b-cf50-449f-8749-f7cfa3ea5937",
            lang_code: "def",
            text: "<p>Haben Sie eventim.de heute zum ersten Mal besucht?</p>",
            question_id: 646,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          options: [
            {
              id: "bb2d16d9-bb5d-4254-8a6e-886a3411c537",
              old_id: 4438,
              wordings: [
                {
                  id: "9b089a25-007d-4c71-ae45-857c21c9504c",
                  lang_code: "en",
                  text: "Yes",
                  question_id: null,
                  option_id: 4438
                },
                {
                  id: "d9f63e75-557f-4b25-8106-a3c5c55ca5ad",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4438
                },
                {
                  id: "99ee4d20-446e-4624-9ecc-b6d8173fefdd",
                  lang_code: "de",
                  text: "Ja",
                  question_id: null,
                  option_id: 4438
                },
                {
                  id: "52a40f31-ab5c-4b4d-ae8c-5975f1d59951",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4438
                },
                {
                  id: "3f71fd45-e681-4d0f-b521-32f8b8c9b40b",
                  lang_code: "def",
                  text: "Ja",
                  question_id: null,
                  option_id: 4438
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "5ae4ff0c-27df-4039-9386-ae49116ca5d5",
              front_id: "bb2d16d9-bb5d-4254-8a6e-886a3411c537"
            },
            {
              id: "15adb6ee-4a89-4a16-aeac-59769ed284ec",
              old_id: 4439,
              wordings: [
                {
                  id: "2fb6bed5-751a-45d4-8701-1febcc7c8eda",
                  lang_code: "en",
                  text: "No",
                  question_id: null,
                  option_id: 4439
                },
                {
                  id: "bcedaa6d-de81-4c5d-9ad1-c15efd510387",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4439
                },
                {
                  id: "3e44d4c5-126c-4ce2-8208-a43344cc9a96",
                  lang_code: "de",
                  text: "Nein",
                  question_id: null,
                  option_id: 4439
                },
                {
                  id: "24091dfb-0742-4781-8cc6-f95959fc53fa",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4439
                },
                {
                  id: "10945538-3c44-4f93-b68a-84052df4a5a1",
                  lang_code: "def",
                  text: "Nein",
                  question_id: null,
                  option_id: 4439
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "005fe540-290f-4fc6-a62e-7fa4caf2ce6b",
              front_id: "15adb6ee-4a89-4a16-aeac-59769ed284ec"
            }
          ],
          randomized_option_order: false,
          additional_info: 0,
          additional_info_open_box: 0
        },
        old_id: 646,
        seq: 4
      },
      {
        front_id: "2c3eb41a-7cb7-4096-a474-781e1111fece",
        reference_id: "01e1bfc1-7874-4bf9-97eb-16a0472cc164",
        question_type_id: 4,
        question_type: {
          title: "Open Number",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20number.png",
          description: "Questionee can only answer with a number",
          id: 4,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Only positive",
              name: "only_positive",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Whole number",
              name: "whole_number",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Prefix",
              name: "prefix",
              type: 3,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Suffix",
              name: "suffix",
              type: 3,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Minimum value",
              name: "val_min",
              type: 4,
              value: null,
              isBaseSetting: false
            },
            {
              title: "Maximum value",
              name: "val_max",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "OPEN_NUMBER_SETTINGS",
          color: "#CDF2B2"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "2c3eb41a-7cb7-4096-a474-781e1111fece",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de how many visits",
        wordings: [
          {
            id: "3d09f079-6bab-4b66-b10a-9997a3c4d094",
            lang_code: "en",
            text:
              "<p>Please estimate: How often did you visit eventim.de in the last four weeks?</p>",
            question_id: 647,
            option_id: null
          },
          {
            id: "0c64a148-8c1d-403d-804f-9cef93d2887b",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 647,
            option_id: null
          },
          {
            id: "98d40c11-a709-4f1e-a356-eeb4bb9671d2",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Bitte schätzen Sie: Wie oft haben Sie eventim.de in den letzten 4 Wochen besucht?</span></p>',
            question_id: 647,
            option_id: null
          },
          {
            id: "94e04641-73d3-477b-b303-0ec8a6ca76d7",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 647,
            option_id: null
          },
          {
            id: "7711897f-1acd-4a2a-811e-716b00b77fe6",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Bitte schätzen Sie: Wie oft haben Sie eventim.de in den letzten vier Wochen besucht?</span></p>',
            question_id: 647,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          only_positive: false,
          whole_number: false
        },
        old_id: 647,
        seq: 5
      },
      {
        front_id: "09cb1ad5-49f4-46f6-b7f3-f2d08c23b202",
        reference_id: "87578fda-c02e-4717-8550-e9bd7c225053",
        question_type_id: 3,
        question_type: {
          title: "Open Text",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20text.png",
          description: "Questionee can answer with a text",
          id: 3,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Number of text box",
              name: "amount_text_box",
              type: 4,
              value: 1,
              isBaseSetting: false,
              min_max: [1, 10]
            },
            {
              title: "Maximum length",
              name: "val_max_length",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "OPEN_TEXT_SETTINGS",
          color: "#C3D9FC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "09cb1ad5-49f4-46f6-b7f3-f2d08c23b202",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de first impression",
        wordings: [
          {
            id: "0907c3b5-f899-4ecc-8459-e679374646bb",
            lang_code: "en",
            text: "<p>What was your first impression of eventim.de?</p>",
            question_id: 649,
            option_id: null
          },
          {
            id: "4f375029-8879-4c6b-a87e-6724912d6f28",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 649,
            option_id: null
          },
          {
            id: "15cc1ad5-2020-453e-8d8c-769f0fb9353c",
            lang_code: "de",
            text: "<p>Was war Dein erster Eindruck von eventim.de?</p>",
            question_id: 649,
            option_id: null
          },
          {
            id: "f2413f19-ec0b-401e-9e8c-ae8595355a4e",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 649,
            option_id: null
          },
          {
            id: "d2dfee74-6c38-40f3-bdc7-171b7e9ad3ff",
            lang_code: "def",
            text: "<p>Was war Ihr erster Eindruck von eventim.de?</p>",
            question_id: 649,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: [],
        old_id: 649,
        seq: 6
      },
      {
        front_id: "5b466d96-4459-4823-9150-a9047f6ef191",
        reference_id: "333b92a3-ccb6-4cf9-81be-036dac8ad00f",
        question_type_id: 2,
        question_type: {
          title: "Multiple Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-to-do-96.png",
          description: "Questionee can select multiple options",
          id: 2,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Maximum answer",
              name: "max_selection",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "MULTIPLE_CHOICE_SETTINGS",
          color: "#F7CCAC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "5b466d96-4459-4823-9150-a9047f6ef191",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de important features",
        wordings: [
          {
            id: "c9c625a6-0694-4f81-9671-ea43ddb8fb45",
            lang_code: "en",
            text:
              "<p>Which of the following features of eventim.de are the most important in your opinion? (More than one answer possible)</p>",
            question_id: 648,
            option_id: null
          },
          {
            id: "c39471fb-7813-4a3d-ba01-4f75a6e6fef0",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 648,
            option_id: null
          },
          {
            id: "f2dd962d-2c70-4f9d-b415-685f90447667",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Welche dieser Funktionen von eventim.de ist Dir am wichtigsten? (Mehrere Antworten möglich)</span></p>',
            question_id: 648,
            option_id: null
          },
          {
            id: "8da5e07e-8629-4b0c-906e-7e0d609dbc49",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 648,
            option_id: null
          },
          {
            id: "09440004-ea67-448f-845f-79e45d3c36c7",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Welche dieser Funktionen von eventim.de ist Ihnen am wichtigsten? (Mehrere Antworten möglich)</span></p>',
            question_id: 648,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          max_selection: null,
          options: [
            {
              id: "684c2619-6f1c-46c2-870d-99135f8d2dd4",
              old_id: 4442,
              wordings: [
                {
                  id: "5c7792ac-864a-438b-9dd6-0501502ed1f5",
                  lang_code: "en",
                  text: "General search",
                  question_id: null,
                  option_id: 4442
                },
                {
                  id: "2ece7383-60bd-4d60-9af1-c8158bf4d828",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4442
                },
                {
                  id: "f57c6cc6-c21e-419d-a741-434008b0079f",
                  lang_code: "de",
                  text: "Allgemeine Suche",
                  question_id: null,
                  option_id: 4442
                },
                {
                  id: "b38f916e-3d7a-4a50-8b3d-5034e9dfee3f",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4442
                },
                {
                  id: "8ee78e97-d272-4e78-9266-c1f3c74a0f69",
                  lang_code: "def",
                  text: "Allgemeine Suche",
                  question_id: null,
                  option_id: 4442
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "89467276-d3a3-42f5-a245-506e20ec5202",
              front_id: "684c2619-6f1c-46c2-870d-99135f8d2dd4"
            },
            {
              id: "b9dc96be-dfda-454d-925d-91ade8eea9af",
              old_id: 4443,
              wordings: [
                {
                  id: "5c3fbb16-78c7-455e-8343-6f58f31d2813",
                  lang_code: "en",
                  text:
                    "Search in event category (concert, classical, sports, etc.)",
                  question_id: null,
                  option_id: 4443
                },
                {
                  id: "b1bdefbe-8eeb-4852-a84a-c53496cb9ce1",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4443
                },
                {
                  id: "27d6e1d1-f49c-4633-8008-90def34b17d4",
                  lang_code: "de",
                  text:
                    "Suche in Eventkategorie (Konzerte, Kultur, Sport etc.)",
                  question_id: null,
                  option_id: 4443
                },
                {
                  id: "48a14cef-70fb-485d-9f1f-727f094599d5",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4443
                },
                {
                  id: "9646890a-2c04-4154-9956-b1c9dc6f595b",
                  lang_code: "def",
                  text:
                    "Suche in Eventkategorie (Konzerte, Kultur, Sport etc.)",
                  question_id: null,
                  option_id: 4443
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "6a741379-d7b2-41b3-869e-da4b55fff4d4",
              front_id: "b9dc96be-dfda-454d-925d-91ade8eea9af"
            },
            {
              id: "4885aadf-6c19-4e7e-81f8-aaccbec35210",
              old_id: 4444,
              wordings: [
                {
                  id: "55234249-85b3-4495-a0e7-341de9ac2c77",
                  lang_code: "en",
                  text: "City-specific search",
                  question_id: null,
                  option_id: 4444
                },
                {
                  id: "275c290a-9a8f-4aa5-97ac-e7b7109c1b49",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4444
                },
                {
                  id: "ac97eb28-07ee-4f79-a0b4-c408e1c0cd77",
                  lang_code: "de",
                  text: "Ortsspezifische Suche",
                  question_id: null,
                  option_id: 4444
                },
                {
                  id: "9af4d9cc-1e3e-44c1-ac3b-a4f10963345e",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4444
                },
                {
                  id: "ee6a0a21-e00d-4fb0-be26-c6c715658a15",
                  lang_code: "def",
                  text: "Ortsspezifische Suche",
                  question_id: null,
                  option_id: 4444
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "2c499b18-a495-4862-bcaa-03af6ed8b837",
              front_id: "4885aadf-6c19-4e7e-81f8-aaccbec35210"
            },
            {
              id: "c1935a62-6fe8-4bc3-8295-12619985d953",
              old_id: 4445,
              wordings: [
                {
                  id: "f56cf7c6-e289-4e68-8958-e541145219cb",
                  lang_code: "en",
                  text: "Ticket Alarm",
                  question_id: null,
                  option_id: 4445
                },
                {
                  id: "a139c689-7a35-43f4-8995-5648b8d448a9",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4445
                },
                {
                  id: "bee1ba7b-6895-4501-82b4-b326338d07ee",
                  lang_code: "de",
                  text: "Ticketalarm",
                  question_id: null,
                  option_id: 4445
                },
                {
                  id: "64d48c0b-10b7-45c2-a458-4416686bba9d",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4445
                },
                {
                  id: "df958211-aa98-44d6-8afc-74c46ee33800",
                  lang_code: "def",
                  text: "Ticketalarm",
                  question_id: null,
                  option_id: 4445
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "6f0bb4e3-1ea2-4817-8915-d775806fecc4",
              front_id: "c1935a62-6fe8-4bc3-8295-12619985d953"
            },
            {
              id: "a3aeacf4-efba-4ec2-9e34-6cdca0174acd",
              old_id: 4446,
              wordings: [
                {
                  id: "a54b155a-df34-4689-a2ae-46cc49d72461",
                  lang_code: "en",
                  text: "EVENTIM Tips",
                  question_id: null,
                  option_id: 4446
                },
                {
                  id: "7a728aca-2a87-4bec-b7d4-acd162dd1ae6",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4446
                },
                {
                  id: "e423efb1-37ac-4b83-a397-82d102ad258c",
                  lang_code: "de",
                  text: "EVENTIM Tipps",
                  question_id: null,
                  option_id: 4446
                },
                {
                  id: "90772a6d-a2ca-4f20-9370-a6d8e58b2fa3",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4446
                },
                {
                  id: "94ba1c26-c562-44b2-a717-41c030cbe19b",
                  lang_code: "def",
                  text: "EVENTIM Tipps",
                  question_id: null,
                  option_id: 4446
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "e75ef889-e735-4399-aa0d-9f296d7b49d5",
              front_id: "a3aeacf4-efba-4ec2-9e34-6cdca0174acd"
            },
            {
              id: "e2afedda-bd76-4871-ad3e-72ddab398ac2",
              old_id: 4447,
              wordings: [
                {
                  id: "5c660d6b-5bbe-4457-8be6-b69f01a7c622",
                  lang_code: "en",
                  text: "EVENTIM Charts",
                  question_id: null,
                  option_id: 4447
                },
                {
                  id: "121cc2da-5ac1-4f90-a528-20589ee7e414",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4447
                },
                {
                  id: "baee1de2-289f-4199-bb48-0e38b6afba6c",
                  lang_code: "de",
                  text: "EVENTIM Charts",
                  question_id: null,
                  option_id: 4447
                },
                {
                  id: "66d98570-e6a4-469c-8a6f-afdd844ab599",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4447
                },
                {
                  id: "b4aa6912-26e6-43a9-ae09-5103c99cbf1e",
                  lang_code: "def",
                  text: "EVENTIM Charts",
                  question_id: null,
                  option_id: 4447
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "215ec5a9-b477-4c26-b9d2-cf038bb1b479",
              front_id: "e2afedda-bd76-4871-ad3e-72ddab398ac2"
            },
            {
              id: "4475976c-3616-4fcf-af96-92814976b58b",
              old_id: 4448,
              wordings: [
                {
                  id: "fdb8bcab-73f2-4058-9c58-8ba48c2af576",
                  lang_code: "en",
                  text: "FanReport",
                  question_id: null,
                  option_id: 4448
                },
                {
                  id: "df2af802-b1b4-4b0e-b6d2-bd9512409bf5",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4448
                },
                {
                  id: "ed922229-1190-42c9-967a-157210740517",
                  lang_code: "de",
                  text: "FanReport",
                  question_id: null,
                  option_id: 4448
                },
                {
                  id: "e533b4d1-94b1-4ade-9b8b-73ec58938429",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4448
                },
                {
                  id: "61ed7b2d-d1a5-4f94-8a90-3e2e597b94d5",
                  lang_code: "def",
                  text: "Fan-Report",
                  question_id: null,
                  option_id: 4448
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "4b565e2b-7bfa-4aa5-b438-c09f7aaafe3f",
              front_id: "4475976c-3616-4fcf-af96-92814976b58b"
            },
            {
              id: "755573dc-569e-452e-897b-f50e4b81b1e1",
              old_id: 4449,
              wordings: [
                {
                  id: "4a26fb17-3e16-4619-ac5c-6d0d1794ed58",
                  lang_code: "en",
                  text: "Eventim.Guide",
                  question_id: null,
                  option_id: 4449
                },
                {
                  id: "406aa21c-ffd6-42a2-8b1c-4ea0641d5967",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4449
                },
                {
                  id: "e60a6a79-a6d7-4ca7-8103-f19464b0c453",
                  lang_code: "de",
                  text: "Eventim.Guide",
                  question_id: null,
                  option_id: 4449
                },
                {
                  id: "5a2173b5-2716-4ca6-90c5-13315a20395c",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4449
                },
                {
                  id: "0c2164a7-8775-467b-9f62-bb515b2faa8e",
                  lang_code: "def",
                  text: "Eventim.Guide",
                  question_id: null,
                  option_id: 4449
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "2bfe4e5e-6f6b-40f5-94f9-dc671bf0ef24",
              front_id: "755573dc-569e-452e-897b-f50e4b81b1e1"
            },
            {
              id: "0e60b7cc-e6d4-4319-aa4f-fd78d5d71a9f",
              old_id: 4450,
              wordings: [
                {
                  id: "729f994e-9784-4f93-9665-c45225957813",
                  lang_code: "en",
                  text: 'Magazine "Headliner"',
                  question_id: null,
                  option_id: 4450
                },
                {
                  id: "1c016d40-0ab8-4c50-aedc-bf116e3e7625",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4450
                },
                {
                  id: "37f539b1-4fd6-4472-ad4f-b4634bb6f093",
                  lang_code: "de",
                  text: 'Magazin "Headliner"',
                  question_id: null,
                  option_id: 4450
                },
                {
                  id: "ddd3362e-1c28-4a21-be29-7fc71417dc61",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4450
                },
                {
                  id: "2dc4f8db-dc6e-4a97-9b06-feab145cb747",
                  lang_code: "def",
                  text: 'Magazin "Headliner"',
                  question_id: null,
                  option_id: 4450
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "bcedaff5-ba04-4857-bc86-a2891e413bb9",
              front_id: "0e60b7cc-e6d4-4319-aa4f-fd78d5d71a9f"
            },
            {
              id: "55bd7c39-8c71-4116-b1f7-971604cb5b11",
              old_id: 4451,
              wordings: [
                {
                  id: "734aff44-63a1-4395-94fa-d03a2c9c342a",
                  lang_code: "en",
                  text: "FanBonus",
                  question_id: null,
                  option_id: 4451
                },
                {
                  id: "eb850ab1-5c42-4c1f-bb7c-23d63df343a8",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4451
                },
                {
                  id: "d47c6fcd-b8ff-471b-b426-d4e8476d6be3",
                  lang_code: "de",
                  text: "FanBonus",
                  question_id: null,
                  option_id: 4451
                },
                {
                  id: "e858df59-04b6-46d8-89fe-8c87bbdcc629",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4451
                },
                {
                  id: "48c724b9-5942-452f-910b-63d9926217fa",
                  lang_code: "def",
                  text: "FanBonus",
                  question_id: null,
                  option_id: 4451
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "e0237fd3-61d8-4125-b12c-92140704a3cf",
              front_id: "55bd7c39-8c71-4116-b1f7-971604cb5b11"
            },
            {
              id: "e489ca87-e5c6-47ae-8d42-28e9ab01c2fe",
              old_id: 4452,
              wordings: [
                {
                  id: "5e7f5a69-7ba8-4fbe-b3db-1931925f0e23",
                  lang_code: "en",
                  text: "My EVENTIM (user account)",
                  question_id: null,
                  option_id: 4452
                },
                {
                  id: "8f8a0033-2419-46c2-8055-673d96b46869",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4452
                },
                {
                  id: "ceaf4b81-be45-4e5c-b882-cfdbaa3656a8",
                  lang_code: "de",
                  text: "Mein EVENTIM (persönlicher Account)",
                  question_id: null,
                  option_id: 4452
                },
                {
                  id: "0dd55258-8adb-4537-afa2-e3455603e4c2",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4452
                },
                {
                  id: "87fa8414-5fec-4657-a508-9d6e158b882b",
                  lang_code: "def",
                  text: "Mein EVENTIM (persönlicher Account)",
                  question_id: null,
                  option_id: 4452
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "dd16f323-d5ba-4926-9b8c-bdd46359cb78",
              front_id: "e489ca87-e5c6-47ae-8d42-28e9ab01c2fe"
            },
            {
              id: "02ea7cdc-2ffd-4f18-ab4d-5a11d8643a07",
              old_id: 4453,
              wordings: [
                {
                  id: "b6554c39-9437-4ef3-b46f-dc7117eefbe0",
                  lang_code: "en",
                  text: "Seating plan",
                  question_id: null,
                  option_id: 4453
                },
                {
                  id: "b4a9b586-6476-4975-a4cc-147f42caa32e",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4453
                },
                {
                  id: "980adb33-8de2-4068-8fe9-bb8bc6dfceaf",
                  lang_code: "de",
                  text: "Saalplan",
                  question_id: null,
                  option_id: 4453
                },
                {
                  id: "5c4bebb7-bb84-4d55-812d-a890952412a7",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4453
                },
                {
                  id: "bc2f8de4-5839-43c9-94de-9f3e15c783f3",
                  lang_code: "def",
                  text: "Saalplan",
                  question_id: null,
                  option_id: 4453
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "ba9eb74c-e532-42d6-bf81-ba9e05c809e1",
              front_id: "02ea7cdc-2ffd-4f18-ab4d-5a11d8643a07"
            },
            {
              id: "dcd3faef-92c1-46cc-99e0-db26df473272",
              old_id: null,
              hidden: false,
              isOther: true,
              wordings: [
                {
                  id: "72dab9c3-14ae-449d-8f86-cb2e239a14eb",
                  lang_code: "en",
                  text: "other"
                },
                {
                  id: "df8058f4-4408-4fd3-8eab-5bd8bce1cac2",
                  lang_code: "de",
                  text: "andere"
                },
                {
                  id: "9811d382-c2cc-454f-bddf-e3b56981d49e",
                  lang_code: "fi",
                  text: "muut"
                },
                {
                  id: "f2370879-ed48-4c0d-ba7b-556730abcb70",
                  lang_code: "nl",
                  text: "anders"
                }
              ],
              front_id: "dcd3faef-92c1-46cc-99e0-db26df473272"
            }
          ],
          randomized_option_order: false,
          additional_info: 1,
          additional_info_open_box: 1,
          picture_options: false,
          additional_info_picture_url: ""
        },
        old_id: 648,
        seq: 7
      },
      {
        front_id: "7e0ce1ba-bdc3-48d0-99a8-e0211c89cba6",
        reference_id: "3df525c3-f4e5-41f6-9d02-8b04359243c0",
        question_type_id: 2,
        question_type: {
          title: "Multiple Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-to-do-96.png",
          description: "Questionee can select multiple options",
          id: 2,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Maximum answer",
              name: "max_selection",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "MULTIPLE_CHOICE_SETTINGS",
          color: "#F7CCAC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "7e0ce1ba-bdc3-48d0-99a8-e0211c89cba6",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "Eventim sales channels",
        wordings: [
          {
            id: "f82ff177-9722-488b-82d0-2b00147e79a7",
            lang_code: "en",
            text:
              "<p>Which sales channels do you usually use to buy your tickets? (More than one answer possible)</p>",
            question_id: 650,
            option_id: null
          },
          {
            id: "a2ce2268-0eb4-4e6c-a675-a5cd99d1ea0c",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 650,
            option_id: null
          },
          {
            id: "6e3f8c93-29eb-4dda-88cf-6e594824899e",
            lang_code: "de",
            text:
              "<p>Welche Verkaufskanäle nutzt Du regelmäßig um Eintrittskarten zu kaufen? (Mehrere Antworten möglich)</p>",
            question_id: 650,
            option_id: null
          },
          {
            id: "ba5159aa-f4b8-497c-8be1-b2926cbc41ef",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 650,
            option_id: null
          },
          {
            id: "5c7e3420-4397-44ff-8ed4-2c5f3710605e",
            lang_code: "def",
            text:
              "<p>Welche Verkaufskanäle nutzen Sie regelmäßig, um Eintrittskarten zu kaufen?&nbsp;(Mehrere Antworten möglich)</p>",
            question_id: 650,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          max_selection: null,
          options: [
            {
              id: "6e6fcae3-36a0-4ddd-bab9-bee3cf34dc8d",
              old_id: 4456,
              wordings: [
                {
                  id: "3f5c1a36-7b8a-4ced-a44f-3cb7290bf5d0",
                  lang_code: "en",
                  text: "Booking office",
                  question_id: null,
                  option_id: 4456
                },
                {
                  id: "f4da0de1-35c3-4f46-a888-1456157b5da6",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4456
                },
                {
                  id: "217a5b63-d0de-4b23-b64f-a2c7606b360b",
                  lang_code: "de",
                  text: "Vorverkaufsstelle",
                  question_id: null,
                  option_id: 4456
                },
                {
                  id: "8e7f5489-ba04-4fb6-9a82-84c8f4ae35fa",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4456
                },
                {
                  id: "520e350d-6f53-416d-b377-adc8f38170ab",
                  lang_code: "def",
                  text: "Vorverkaufsstelle",
                  question_id: null,
                  option_id: 4456
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "977930c2-6d12-4cd1-8571-e0e2efd16ecc",
              front_id: "6e6fcae3-36a0-4ddd-bab9-bee3cf34dc8d"
            },
            {
              id: "7e77e9ce-60d6-484d-bfe0-1062724d515e",
              old_id: 4457,
              wordings: [
                {
                  id: "985eddbf-9892-42e9-aa8b-51552899f79c",
                  lang_code: "en",
                  text: "Boxoffice",
                  question_id: null,
                  option_id: 4457
                },
                {
                  id: "bae5a9a0-2180-45a9-b5d5-13cb5f33227a",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4457
                },
                {
                  id: "22992285-1455-4083-afe9-939f9939537f",
                  lang_code: "de",
                  text: "Abendkasse",
                  question_id: null,
                  option_id: 4457
                },
                {
                  id: "5aa13b10-b12d-4b7a-8b04-7f6c4441f32f",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4457
                },
                {
                  id: "98991ec3-956d-439c-8501-27c83b6e7a2e",
                  lang_code: "def",
                  text: "Abendkasse",
                  question_id: null,
                  option_id: 4457
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "fdd953c1-c39d-4e91-b538-675df62407e1",
              front_id: "7e77e9ce-60d6-484d-bfe0-1062724d515e"
            },
            {
              id: "03e66f8b-4519-4725-8ae0-8bbf51d5147f",
              old_id: 4458,
              wordings: [
                {
                  id: "abd2f16d-39f2-441f-b2b9-87255b9c1ec2",
                  lang_code: "en",
                  text: "Ticket hotline",
                  question_id: null,
                  option_id: 4458
                },
                {
                  id: "3d938af9-7f40-4bb8-9dad-343010602c17",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4458
                },
                {
                  id: "02f7012f-0df0-4514-875b-f0e3294caf78",
                  lang_code: "de",
                  text: "Ticket-Hotline",
                  question_id: null,
                  option_id: 4458
                },
                {
                  id: "68f3704a-4c8c-4679-b930-0cbb4df5411f",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4458
                },
                {
                  id: "803a007b-5248-41f2-a5ab-73daccac0f80",
                  lang_code: "def",
                  text: "Ticket-Hotline",
                  question_id: null,
                  option_id: 4458
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "8730adb9-ff2d-4bab-a65e-9ea5d912ca28",
              front_id: "03e66f8b-4519-4725-8ae0-8bbf51d5147f"
            },
            {
              id: "7cc9f637-60d7-4afb-b782-3104603d6eac",
              old_id: 4459,
              wordings: [
                {
                  id: "a49cc272-bd1b-4a4d-a238-215357e7d088",
                  lang_code: "en",
                  text: "Internet",
                  question_id: null,
                  option_id: 4459
                },
                {
                  id: "4b108bc0-1318-4850-9f9b-e26ebe4a68bd",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4459
                },
                {
                  id: "83121793-f74b-4446-85f3-3a696816f0f5",
                  lang_code: "de",
                  text: "Internet",
                  question_id: null,
                  option_id: 4459
                },
                {
                  id: "de1e4db5-cf3a-4e56-8cea-1ae657ba907e",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4459
                },
                {
                  id: "ccead7e5-e04f-44bd-91d0-5966a8132b03",
                  lang_code: "def",
                  text: "Internet",
                  question_id: null,
                  option_id: 4459
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "c0fc76c6-a606-49a3-b820-0317730e9e0e",
              front_id: "7cc9f637-60d7-4afb-b782-3104603d6eac"
            },
            {
              id: "e21a55c5-6886-4f05-9e5b-c8e842afc907",
              old_id: 4644,
              wordings: [
                {
                  id: "3538eb6b-d738-4016-8135-9107acb2d021",
                  lang_code: "en",
                  text: "eventim.de",
                  question_id: null,
                  option_id: 4644
                },
                {
                  id: "42d6a1ab-2f29-4c74-a1ea-08cecdbb2d17",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4644
                },
                {
                  id: "ca5788c3-4fb3-4490-a51f-9ddaee6dbf94",
                  lang_code: "de",
                  text: "eventim.de",
                  question_id: null,
                  option_id: 4644
                },
                {
                  id: "ab722140-92f1-4723-b13e-415c6045aa85",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4644
                },
                {
                  id: "a00a0a8c-29dc-4240-94ca-063feb05d358",
                  lang_code: "def",
                  text: "eventim.de",
                  question_id: null,
                  option_id: 4644
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "2e9b2ae1-8dd5-48a8-84c2-69d194cab48d",
              front_id: "e21a55c5-6886-4f05-9e5b-c8e842afc907"
            },
            {
              id: "04246efe-56d7-4c66-9ace-b3ca1a8f4366",
              old_id: 4645,
              wordings: [
                {
                  id: "aa2fd532-446b-43de-a406-866230c958c3",
                  lang_code: "en",
                  text: "ticketmaster.de",
                  question_id: null,
                  option_id: 4645
                },
                {
                  id: "2c8966b5-ad62-4fe5-b4cf-c3f8c237c680",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4645
                },
                {
                  id: "15b39655-c5dd-4bd3-9ba0-9a2b49497583",
                  lang_code: "de",
                  text: "ticketmaster.de",
                  question_id: null,
                  option_id: 4645
                },
                {
                  id: "abd8c24a-a0d4-42d3-b3de-aad71bfd9d74",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4645
                },
                {
                  id: "ecbd380c-21e6-4f98-8a2d-8694fa345bc7",
                  lang_code: "def",
                  text: "ticketmaster.de",
                  question_id: null,
                  option_id: 4645
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "40e95fbd-3094-436e-9c5e-ae866f5a460a",
              front_id: "04246efe-56d7-4c66-9ace-b3ca1a8f4366"
            },
            {
              id: "a5587fc4-7374-413f-a4cf-ba0b3ed789ce",
              old_id: 4646,
              wordings: [
                {
                  id: "64e977c3-7e57-4307-8737-795c221417d0",
                  lang_code: "en",
                  text: "stage-entertainment.de",
                  question_id: null,
                  option_id: 4646
                },
                {
                  id: "a234e79e-d896-43f9-89c5-571a52792a77",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4646
                },
                {
                  id: "301facf5-e457-4ded-9430-97e875069e96",
                  lang_code: "de",
                  text: "stage-entertainment.de",
                  question_id: null,
                  option_id: 4646
                },
                {
                  id: "667a0550-c993-426c-8637-e665dc673619",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4646
                },
                {
                  id: "1b0c56ad-8172-4cd6-8877-0dfa5dfe399a",
                  lang_code: "def",
                  text: "stage-entertainment.de",
                  question_id: null,
                  option_id: 4646
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "ec236256-cf82-43f0-9d0b-ac96eb59431f",
              front_id: "a5587fc4-7374-413f-a4cf-ba0b3ed789ce"
            },
            {
              id: "e7d205af-de69-435e-8fea-798a685c401c",
              old_id: 4647,
              wordings: [
                {
                  id: "d731a874-5bfa-4496-9b7d-20a67ac31d82",
                  lang_code: "en",
                  text: "ticketonline.de",
                  question_id: null,
                  option_id: 4647
                },
                {
                  id: "a934a9b0-cc51-42f7-88ce-eb37a44f9eef",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4647
                },
                {
                  id: "40b1ad02-08b2-4791-8f38-fcd18e8928ef",
                  lang_code: "de",
                  text: "ticketonline.de",
                  question_id: null,
                  option_id: 4647
                },
                {
                  id: "be59c085-8c6d-47f0-b585-1b1c180545cf",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4647
                },
                {
                  id: "d592cdd4-07c8-4287-b4ae-0e89956b8bf6",
                  lang_code: "def",
                  text: "ticketonline.de",
                  question_id: null,
                  option_id: 4647
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "d5f3a28d-7a43-44f9-914f-01bbc3341b02",
              front_id: "e7d205af-de69-435e-8fea-798a685c401c"
            },
            {
              id: "304413ce-3a5a-43ff-a059-a5cc1fe4b596",
              old_id: 4648,
              wordings: [
                {
                  id: "ec33e7c8-1e37-4c1d-a7b5-b5d39761d4b3",
                  lang_code: "en",
                  text: "getgo.de",
                  question_id: null,
                  option_id: 4648
                },
                {
                  id: "899af5ac-a29b-46b2-909f-dbd7067429a8",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4648
                },
                {
                  id: "22286dbe-6d57-4e33-b859-dbf9a5e93e1c",
                  lang_code: "de",
                  text: "getgo.de",
                  question_id: null,
                  option_id: 4648
                },
                {
                  id: "38eedc40-67df-46ee-8410-2bf98bed6582",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4648
                },
                {
                  id: "73ed0f04-ce5d-470b-92ba-e2ee15417f63",
                  lang_code: "def",
                  text: "getgo.de",
                  question_id: null,
                  option_id: 4648
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "26d55006-b141-4efa-b953-7566e4bb852c",
              front_id: "304413ce-3a5a-43ff-a059-a5cc1fe4b596"
            },
            {
              id: "2d27c950-f041-489a-9a5e-bc05ad5f0407",
              old_id: 4649,
              wordings: [
                {
                  id: "d9e7807d-bab1-4bcf-841a-2571b26ea9e3",
                  lang_code: "en",
                  text: "fansale.de",
                  question_id: null,
                  option_id: 4649
                },
                {
                  id: "b1eab737-059d-4ba4-85a1-d47495fa4e2b",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4649
                },
                {
                  id: "fdf0e8af-cb31-40d7-a9b6-2f80555088ce",
                  lang_code: "de",
                  text: "fansale.de",
                  question_id: null,
                  option_id: 4649
                },
                {
                  id: "ba79e872-1b2f-4db9-8dcd-61d7bc77aae2",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4649
                },
                {
                  id: "29ab78de-45f7-4bf1-a7b3-1f8b691c0711",
                  lang_code: "def",
                  text: "fansale.de",
                  question_id: null,
                  option_id: 4649
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "e3f77093-8d1f-46b5-9f5f-0598b84cac32",
              front_id: "2d27c950-f041-489a-9a5e-bc05ad5f0407"
            },
            {
              id: "89634566-b7c6-481f-aa09-4b72ca395cd5",
              old_id: 4650,
              wordings: [
                {
                  id: "cee49585-af23-4eea-bc02-2b2cb0d5dd17",
                  lang_code: "en",
                  text: "seatwave.de",
                  question_id: null,
                  option_id: 4650
                },
                {
                  id: "04c514b4-af05-4110-a4b3-0b1a096fbd36",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4650
                },
                {
                  id: "6724eaca-8ed7-49f1-af53-4b7dc70773b7",
                  lang_code: "de",
                  text: "seatwave.de",
                  question_id: null,
                  option_id: 4650
                },
                {
                  id: "d4351f99-b105-4ab9-94d1-87bd8f33a982",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4650
                },
                {
                  id: "af381a32-45fe-4e97-bb00-30c9792d2ff2",
                  lang_code: "def",
                  text: "seatwave.de",
                  question_id: null,
                  option_id: 4650
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "ea4912cf-948c-4fa7-8c9e-58dcf6bd0590",
              front_id: "89634566-b7c6-481f-aa09-4b72ca395cd5"
            },
            {
              id: "3a493294-69e7-4006-9abe-d564388fc50e",
              old_id: 4651,
              wordings: [
                {
                  id: "d1ebccb6-7778-4eec-82b9-c069dbd5dc8f",
                  lang_code: "en",
                  text: "viagogo.de",
                  question_id: null,
                  option_id: 4651
                },
                {
                  id: "978bef4c-3d7d-41f8-90a3-c74d3a023b71",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4651
                },
                {
                  id: "4ad06330-aed5-4931-a726-908ff41ba811",
                  lang_code: "de",
                  text: "viagogo.de",
                  question_id: null,
                  option_id: 4651
                },
                {
                  id: "ce7d4c66-0547-4237-adbd-d396a849cd3a",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4651
                },
                {
                  id: "08feeca8-2b5f-4ddd-9d95-dec2f03b8d1b",
                  lang_code: "def",
                  text: "viagogo.de",
                  question_id: null,
                  option_id: 4651
                }
              ],
              selected: false,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "ca926fed-f1d1-4351-ab2d-b76d23e36f6e",
              front_id: "3a493294-69e7-4006-9abe-d564388fc50e"
            }
          ],
          randomized_option_order: false,
          additional_info: 0,
          additional_info_open_box: 0,
          picture_options: false,
          additional_info_picture_url: ""
        },
        old_id: 650,
        seq: 8
      },
      {
        front_id: "cdf83a57-3f29-4d17-9dfc-d74ad924ed5b",
        reference_id: "8423bb32-f010-446f-aa3a-afd9e3f4b28c",
        question_type_id: 2,
        question_type: {
          title: "Multiple Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-to-do-96.png",
          description: "Questionee can select multiple options",
          id: 2,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Maximum answer",
              name: "max_selection",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "MULTIPLE_CHOICE_SETTINGS",
          color: "#F7CCAC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "cdf83a57-3f29-4d17-9dfc-d74ad924ed5b",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de reason for visit",
        wordings: [
          {
            id: "1d1b6fa9-8acf-4a9f-8d34-e059d422b95a",
            lang_code: "en",
            text:
              "<p>What was the reason for visiting eventim.de today? (More than one answer possible)</p>",
            question_id: 651,
            option_id: null
          },
          {
            id: "44077eba-d292-4901-8e28-e9e08b8a8698",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 651,
            option_id: null
          },
          {
            id: "e729192e-3c83-40cc-afc8-6fcc8c377099",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Was war der Grund für Deinen heutigen Besuch auf eventim.de? (Mehrere Antworten möglich)</span></p>',
            question_id: 651,
            option_id: null
          },
          {
            id: "d2dfb5e0-1b77-47e0-9384-9c3e83f3e09d",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 651,
            option_id: null
          },
          {
            id: "8f8fa15a-8b47-4144-bd20-23494c020c1a",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Was war der Grund für Ihren heutigen Besuch auf eventim.de? (Mehrere Antworten möglich)</span></p>',
            question_id: 651,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          max_selection: null,
          options: [
            {
              id: "fb6aa329-63d5-403b-9800-dec5dd109bf7",
              old_id: 4460,
              wordings: [
                {
                  id: "16db2ef9-7339-45ce-abcd-ff30e20e194c",
                  lang_code: "en",
                  text: "Finding out about a certain event",
                  question_id: null,
                  option_id: 4460
                },
                {
                  id: "a00065bc-1443-4d7e-9612-a52460740f87",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4460
                },
                {
                  id: "f396cb4c-163f-494f-acda-87b1d12c0d6c",
                  lang_code: "de",
                  text: "Informationen für eine bestimmtes Event erhalten",
                  question_id: null,
                  option_id: 4460
                },
                {
                  id: "f2495f3b-bfa8-4098-bb29-11f16feea9c9",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4460
                },
                {
                  id: "b59d7c8c-a813-4069-bb7f-0af48dbe2763",
                  lang_code: "def",
                  text: "Informationen für eine bestimmtes Event erhalten",
                  question_id: null,
                  option_id: 4460
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "2db30816-f2df-4fbf-927a-34f9f2938639",
              front_id: "fb6aa329-63d5-403b-9800-dec5dd109bf7"
            },
            {
              id: "133d6c26-8d7f-4cd9-ba09-ace03b958658",
              old_id: 4461,
              wordings: [
                {
                  id: "d2911f73-1237-48e2-8186-c4eea43b2bac",
                  lang_code: "en",
                  text: "Buying tickets",
                  question_id: null,
                  option_id: 4461
                },
                {
                  id: "eb2abcba-df60-4d8b-8739-b5d44380eb6b",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4461
                },
                {
                  id: "e14c7658-4195-45d2-a34b-26c567ff24a9",
                  lang_code: "de",
                  text: "Ticket/s kaufen",
                  question_id: null,
                  option_id: 4461
                },
                {
                  id: "e244efe3-eec4-41f9-b85c-28427896f493",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4461
                },
                {
                  id: "f7975155-6117-462b-bb60-972259470a34",
                  lang_code: "def",
                  text: "Ticket/s kaufen",
                  question_id: null,
                  option_id: 4461
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "4c71cfb8-ab01-4acc-8549-c792153fffe9",
              front_id: "133d6c26-8d7f-4cd9-ba09-ace03b958658"
            },
            {
              id: "7ba6faf6-71f0-4259-9df5-cfc19f52bf8f",
              old_id: 4462,
              wordings: [
                {
                  id: "782d3422-d952-47a5-a6ec-5997157f42b6",
                  lang_code: "en",
                  text: "Finding events near me",
                  question_id: null,
                  option_id: 4462
                },
                {
                  id: "5a09066a-51ac-4f20-b344-031bf2046474",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4462
                },
                {
                  id: "e53fc792-3871-402e-b6c8-bb2a877d9a89",
                  lang_code: "de",
                  text: "Veranstaltungen in meiner Stadt finden",
                  question_id: null,
                  option_id: 4462
                },
                {
                  id: "74691f4a-826e-484a-9b78-cabcce09fc66",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4462
                },
                {
                  id: "6d73ee8a-68e3-416c-a4b4-de29d282baa9",
                  lang_code: "def",
                  text: "Veranstaltungen in meiner Stadt finden",
                  question_id: null,
                  option_id: 4462
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "0b0731d6-2ca4-4d53-b835-a95532772c5f",
              front_id: "7ba6faf6-71f0-4259-9df5-cfc19f52bf8f"
            },
            {
              id: "af84e9ac-6f74-4de5-8975-10f69ccf1339",
              old_id: 4463,
              wordings: [
                {
                  id: "69d53077-dcb0-4026-8ed1-fb3df2462ee5",
                  lang_code: "en",
                  text: "Finding events of a certain artist",
                  question_id: null,
                  option_id: 4463
                },
                {
                  id: "6ba4ebdd-cfd9-440b-8c30-ce5280effb25",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4463
                },
                {
                  id: "9c01f3dd-1410-40b3-b9c9-e5af42f03265",
                  lang_code: "de",
                  text: "Veranstaltungen eines bestimmten Künstlers finden",
                  question_id: null,
                  option_id: 4463
                },
                {
                  id: "efd17455-1f70-4e10-af67-6325d28532f7",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4463
                },
                {
                  id: "998df365-25a9-49f1-9d67-8bf12db5dedb",
                  lang_code: "def",
                  text: "Veranstaltungen eines bestimmten Künstlers finden",
                  question_id: null,
                  option_id: 4463
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "b732db8f-3129-4ca8-a445-95b10d7b7b0e",
              front_id: "af84e9ac-6f74-4de5-8975-10f69ccf1339"
            },
            {
              id: "bab9d0f0-0a06-4bb8-82d7-1d7af0a9c9ef",
              old_id: 4464,
              wordings: [
                {
                  id: "a83f9c62-a768-47db-8fa3-83db90cb21fe",
                  lang_code: "en",
                  text: "Browsing, no specific reason",
                  question_id: null,
                  option_id: 4464
                },
                {
                  id: "91846224-3983-41c1-a395-f699faf0d5f5",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4464
                },
                {
                  id: "daffcd23-eb61-4cf2-90cc-c43113272e9a",
                  lang_code: "de",
                  text: "Stöbern, kein besonderer Grund",
                  question_id: null,
                  option_id: 4464
                },
                {
                  id: "17f115d3-7936-4257-be3b-d91067f6e431",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4464
                },
                {
                  id: "050a1db4-14a4-4d25-ad99-d3069e7457e5",
                  lang_code: "def",
                  text: "Stöbern, kein besonderer Grund",
                  question_id: null,
                  option_id: 4464
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "03c58968-d2d0-48b0-b79b-bcca07e41106",
              front_id: "bab9d0f0-0a06-4bb8-82d7-1d7af0a9c9ef"
            },
            {
              id: "b5ecb46c-d5f8-4540-927f-e21ac8abe8f7",
              old_id: 4465,
              wordings: [
                {
                  id: "95d85b65-b571-4f82-9b30-0bdee00fee61",
                  lang_code: "en",
                  text: "Finding information in the Help Center",
                  question_id: null,
                  option_id: 4465
                },
                {
                  id: "432650f2-adba-42a4-81b2-5331337ce9f6",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4465
                },
                {
                  id: "fd144f26-f025-45d5-95bb-dde850fbc234",
                  lang_code: "de",
                  text: "Informationen im Help Center finden",
                  question_id: null,
                  option_id: 4465
                },
                {
                  id: "91ff8c3d-ce56-451f-a45e-92c14c128770",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4465
                },
                {
                  id: "cb9391e6-db1b-4d72-82d8-10d05f474877",
                  lang_code: "def",
                  text: "Informationen im Help Center finden",
                  question_id: null,
                  option_id: 4465
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "1dd3dbfa-da24-4758-b1cd-f2fb00d60b28",
              front_id: "b5ecb46c-d5f8-4540-927f-e21ac8abe8f7"
            },
            {
              id: "2a46a266-5eb2-4c72-9297-27d8b8c9ed1c",
              old_id: 4466,
              wordings: [
                {
                  id: "a62f41a2-8322-45fd-ae65-00a8564520de",
                  lang_code: "en",
                  text: "To register for the Ticket Alarm/Newsletter",
                  question_id: null,
                  option_id: 4466
                },
                {
                  id: "5dbab2ea-ed43-4e3b-bd3c-75f2a12c2a86",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4466
                },
                {
                  id: "d5fce91b-2c7f-4621-8ed4-55f30d3c9134",
                  lang_code: "de",
                  text: "Anmeldung zum Ticketalarm/Newsletter",
                  question_id: null,
                  option_id: 4466
                },
                {
                  id: "e757ba91-416a-44ee-9caa-520770d4c450",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4466
                },
                {
                  id: "655b3a8a-5334-4a92-a308-61cdcc928889",
                  lang_code: "def",
                  text: "Anmeldung zum Ticketalarm/Newsletter",
                  question_id: null,
                  option_id: 4466
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "79771146-2ec8-42fd-a840-275967f6a44b",
              front_id: "2a46a266-5eb2-4c72-9297-27d8b8c9ed1c"
            },
            {
              id: "5dc3f773-8cce-4550-8a86-2def44607f79",
              old_id: 4467,
              wordings: [
                {
                  id: "e3a582c4-3f82-4fe1-9626-f4e71c2de4a6",
                  lang_code: "en",
                  text: "To visit My EVENTIM (user account)",
                  question_id: null,
                  option_id: 4467
                },
                {
                  id: "a15c5b8b-cb61-4092-b917-2f471ca7fd3e",
                  lang_code: "nl",
                  text: "x",
                  question_id: null,
                  option_id: 4467
                },
                {
                  id: "bc2e32fe-68fc-437e-8083-942900e848fe",
                  lang_code: "de",
                  text: "Besuch von Mein EVENTIM (persönlicher Account)",
                  question_id: null,
                  option_id: 4467
                },
                {
                  id: "2543b285-97f1-4595-a0f4-1b652b638450",
                  lang_code: "fi",
                  text: "x",
                  question_id: null,
                  option_id: 4467
                },
                {
                  id: "23bb878f-49ff-4b9e-9529-1c5a8d3c1395",
                  lang_code: "def",
                  text: "Besuch von Mein EVENTIM (persönlicher Account)",
                  question_id: null,
                  option_id: 4467
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "306e9aa0-bb9a-44fd-a3cc-2ad998047042",
              front_id: "5dc3f773-8cce-4550-8a86-2def44607f79"
            },
            {
              id: "3d8ef3b5-0eb0-445f-ac8d-24cb73e45449",
              old_id: null,
              hidden: false,
              isOther: true,
              wordings: [
                {
                  id: "4f175ad2-2c12-49ac-80a3-2abe9414b1f6",
                  lang_code: "en",
                  text: "other"
                },
                {
                  id: "b299c1d6-277d-4c28-9c7a-5d82541687dc",
                  lang_code: "de",
                  text: "andere"
                },
                {
                  id: "cbf71e4d-d152-4425-ad0c-a1d0f8964a8f",
                  lang_code: "fi",
                  text: "muut"
                },
                {
                  id: "8dd66dcb-7bf2-4b76-bcdd-02f11ccd35da",
                  lang_code: "nl",
                  text: "anders"
                }
              ],
              front_id: "3d8ef3b5-0eb0-445f-ac8d-24cb73e45449"
            }
          ],
          randomized_option_order: false,
          additional_info: 1,
          additional_info_open_box: 1,
          picture_options: false,
          additional_info_picture_url: ""
        },
        old_id: 651,
        seq: 9
      },
      {
        front_id: "67724710-1268-428f-9156-a50e962f85ee",
        reference_id: "6aa153ec-c6d4-4cd0-a81f-62621644f48d",
        question_type_id: 3,
        question_type: {
          title: "Open Text",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20text.png",
          description: "Questionee can answer with a text",
          id: 3,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Number of text box",
              name: "amount_text_box",
              type: 4,
              value: 1,
              isBaseSetting: false,
              min_max: [1, 10]
            },
            {
              title: "Maximum length",
              name: "val_max_length",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "OPEN_TEXT_SETTINGS",
          color: "#C3D9FC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "67724710-1268-428f-9156-a50e962f85ee",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de add feature",
        wordings: [
          {
            id: "34bbc627-3313-4743-9bc7-1d1f61fcfb1b",
            lang_code: "en",
            text:
              "<p>What feature  do you think we should add to eventim.de?</p>",
            question_id: 652,
            option_id: null
          },
          {
            id: "bfc59772-3643-4f00-b7a4-00b1078bc100",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 652,
            option_id: null
          },
          {
            id: "631ca9bd-c475-476c-b19c-d976e3cf2ad8",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Welche wichtige Funktion sollten wir eventim.de Deiner Meinung nach noch hinzufügen?</span></p>',
            question_id: 652,
            option_id: null
          },
          {
            id: "470a14f1-2fd4-4d6f-9501-2ea9568b1c8a",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 652,
            option_id: null
          },
          {
            id: "0ca91d22-8d8c-4df3-a426-ce1a212298e7",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Welche wichtige Funktion sollten wir eventim.de Ihrer Meinung nach noch hinzufügen?</span></p>',
            question_id: 652,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: [],
        old_id: 652,
        seq: 10
      },
      {
        front_id: "d473351b-1df2-4dab-93ba-1977adac40ac",
        reference_id: "302a6bb1-ec73-4155-83a9-029a5863257a",
        question_type_id: 3,
        question_type: {
          title: "Open Text",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20text.png",
          description: "Questionee can answer with a text",
          id: 3,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Number of text box",
              name: "amount_text_box",
              type: 4,
              value: 1,
              isBaseSetting: false,
              min_max: [1, 10]
            },
            {
              title: "Maximum length",
              name: "val_max_length",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "OPEN_TEXT_SETTINGS",
          color: "#C3D9FC"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "d473351b-1df2-4dab-93ba-1977adac40ac",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f43f",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "eventim.de improve",
        wordings: [
          {
            id: "91bb959c-8286-4695-8adb-69cc6525e264",
            lang_code: "en",
            text:
              "<p>What do you not like about eventim.de? What should be improved?</p>",
            question_id: 653,
            option_id: null
          },
          {
            id: "8ce1c9b5-b2a4-4b84-a0c5-6272b1b27210",
            lang_code: "nl",
            text: "<p>x</p>",
            question_id: 653,
            option_id: null
          },
          {
            id: "6c041f96-f6c0-4d51-9801-a4e89504989c",
            lang_code: "de",
            text:
              "<p>Was gefällt Dir nicht an eventim.de? Was sollten wir verbessern?</p>",
            question_id: 653,
            option_id: null
          },
          {
            id: "8e3dc94f-77ba-41a8-a2a1-7081230218dc",
            lang_code: "fi",
            text: "<p>x</p>",
            question_id: 653,
            option_id: null
          },
          {
            id: "20587e66-9c00-4495-965d-53b73a87c63f",
            lang_code: "def",
            text:
              "<p>Was gefällt Ihnen nicht an eventim.de? Was sollten wir verbessern?</p>",
            question_id: 653,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: [],
        old_id: 653,
        seq: 11
      },
      {
        front_id: "ac9f05ac-a7a5-4d6c-af9d-61f20b3aecd7",
        reference_id: "03b9acb1-d351-477b-ac65-67e2211f7467",
        question_type_id: 1,
        question_type: {
          title: "Single Choice",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-tasklist-96.png",
          description: "Questionee can only select one option",
          id: 1,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Dropdown",
              name: "dropdown",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Randomize option order",
              name: "randomized_option_order",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Add "Other" Option',
              name: "additional_info",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: 'Open Text Box for "Other"',
              name: "additional_info_open_box",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Picture options",
              name: "picture_options",
              type: 0,
              value: false,
              isBaseSetting: false
            }
          ],
          settingsType: "SINGLE_CHOICE_SETTINGS",
          color: "#B3DFEF"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "ac9f05ac-a7a5-4d6c-af9d-61f20b3aecd7",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f422",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "Gender",
        wordings: [
          {
            id: "ee1e68d9-3231-4bb1-8b42-172011e04ac7",
            lang_code: "en",
            text:
              '<p>We would like to ask you here for your personal data. Providing this data is voluntary and it will be analysed anonymously.</p><p><br></p><p><span style="color: rgb(0, 0, 0);">What is your gender?</span></p>',
            question_id: 12,
            option_id: null
          },
          {
            id: "341acb50-3b4c-4936-855c-a11679ca4ebc",
            lang_code: "nl",
            text: "<p>Wat is je geslacht?</p>",
            question_id: 12,
            option_id: null
          },
          {
            id: "8cd60151-42b6-4e4a-800e-a41a2a0175e7",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Was trifft auf Dich zu?</span></p>',
            question_id: 12,
            option_id: null
          },
          {
            id: "5787a726-33b0-4760-a94b-e0341d187789",
            lang_code: "fi",
            text: "<p>Sukupuolesi?</p>",
            question_id: 12,
            option_id: null
          },
          {
            id: "f33aec32-20bd-4924-bb2f-ffe243cc1193",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Wir fragen Sie nun nach persönlichen Daten. Diese Angaben sind natürlich freiwillig. Die Auswertung erfolgt anonymisiert.</span></p><p><br></p><p><span style="color: rgb(0, 0, 0);">Bitte geben Sie Ihr Geschlecht an.</span></p>',
            question_id: 12,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          options: [
            {
              id: "dc2fa197-78e2-4f5e-9805-e4b275bea1a6",
              old_id: 2300,
              wordings: [
                {
                  id: "c48094ab-a0f6-49a3-aed3-6190e3b1d3ed",
                  lang_code: "en",
                  text: "Male",
                  question_id: null,
                  option_id: 2300
                },
                {
                  id: "f55cf706-15d7-41a2-bc41-3fa53122aa94",
                  lang_code: "nl",
                  text: "Man",
                  question_id: null,
                  option_id: 2300
                },
                {
                  id: "6f99ba07-0305-4a09-9931-fcd4cbb1121f",
                  lang_code: "de",
                  text: "Männlich",
                  question_id: null,
                  option_id: 2300
                },
                {
                  id: "8645d81b-e4e6-46d0-944c-ae199e1f5984",
                  lang_code: "fi",
                  text: "Mies",
                  question_id: null,
                  option_id: 2300
                },
                {
                  id: "a75d5191-1310-44d7-8b8f-fbb732c317cc",
                  lang_code: "def",
                  text: "Männlich",
                  question_id: null,
                  option_id: 2300
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "b0e5d80f-33d3-4c8d-83fc-7caf69cf2f9d",
              front_id: "dc2fa197-78e2-4f5e-9805-e4b275bea1a6"
            },
            {
              id: "d61d3644-1593-422f-a0c7-1eeee828d4e5",
              old_id: 2301,
              wordings: [
                {
                  id: "b142d0c8-4f5f-4bcc-a4ce-ad4314a69fae",
                  lang_code: "en",
                  text: "Female",
                  question_id: null,
                  option_id: 2301
                },
                {
                  id: "03afd3b2-cf0d-406e-b3a0-e01e2b0a86e5",
                  lang_code: "nl",
                  text: "Vrouw",
                  question_id: null,
                  option_id: 2301
                },
                {
                  id: "d89d84b2-8a91-4dc8-b498-31da74f80d3e",
                  lang_code: "de",
                  text: "Weiblich",
                  question_id: null,
                  option_id: 2301
                },
                {
                  id: "d36dcfa6-b5b0-47b0-aa27-b458868d4374",
                  lang_code: "fi",
                  text: "Nainen",
                  question_id: null,
                  option_id: 2301
                },
                {
                  id: "405461a8-c43e-4502-ba45-36884768fa68",
                  lang_code: "def",
                  text: "Weiblich",
                  question_id: null,
                  option_id: 2301
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "c5f89cda-434b-4413-83ff-ecf8ae7d4bf4",
              front_id: "d61d3644-1593-422f-a0c7-1eeee828d4e5"
            },
            {
              id: "e7593de2-c7a6-4e3f-b17f-803c2f509ed1",
              old_id: 2302,
              wordings: [
                {
                  id: "657252fa-ddf1-4a65-bc14-86509b65ff20",
                  lang_code: "en",
                  text: "Prefer not to say",
                  question_id: null,
                  option_id: 2302
                },
                {
                  id: "f4dba705-6aa9-40b5-95b1-0f93c885d7a8",
                  lang_code: "nl",
                  text: "Geen antwoord",
                  question_id: null,
                  option_id: 2302
                },
                {
                  id: "1ff6af20-bed9-463a-89f1-970114ebb9c3",
                  lang_code: "de",
                  text: "keine Angabe",
                  question_id: null,
                  option_id: 2302
                },
                {
                  id: "62e465b4-7d26-4621-8e3d-cc36345b3311",
                  lang_code: "fi",
                  text: "Ei vastausta",
                  question_id: null,
                  option_id: 2302
                },
                {
                  id: "3e003a78-b47f-49e4-a483-0b2e0c36335b",
                  lang_code: "def",
                  text: "keine Angabe",
                  question_id: null,
                  option_id: 2302
                }
              ],
              selected: true,
              hidden: false,
              isOther: false,
              imageUrl: null,
              reference_id: "862fdb24-8d13-40b7-a086-c82c62aaf489",
              front_id: "e7593de2-c7a6-4e3f-b17f-803c2f509ed1"
            }
          ],
          randomized_option_order: false,
          additional_info: 0,
          additional_info_open_box: 1
        },
        old_id: 12,
        seq: 12
      },
      {
        front_id: "69bfc46c-6a78-4714-8c79-24789df10d03",
        reference_id: "80b6a348-2d5a-4125-b5b7-f1018e8b37d9",
        question_type_id: 4,
        question_type: {
          title: "Open Number",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/open%20number.png",
          description: "Questionee can only answer with a number",
          id: 4,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Only positive",
              name: "only_positive",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Whole number",
              name: "whole_number",
              type: 0,
              value: false,
              isBaseSetting: false
            },
            {
              title: "Prefix",
              name: "prefix",
              type: 3,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Suffix",
              name: "suffix",
              type: 3,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Minimum value",
              name: "val_min",
              type: 4,
              value: null,
              isBaseSetting: false
            },
            {
              title: "Maximum value",
              name: "val_max",
              type: 4,
              value: null,
              isBaseSetting: false
            }
          ],
          settingsType: "OPEN_NUMBER_SETTINGS",
          color: "#CDF2B2"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "",
        value: "",
        id: "69bfc46c-6a78-4714-8c79-24789df10d03",
        question_theme: null,
        question_theme_id: "5d48535b7bfdad008711f422",
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "Age",
        wordings: [
          {
            id: "3a71d0c0-f903-40a4-b693-92152581320f",
            lang_code: "en",
            text: "<p>How old are you?</p>",
            question_id: 8,
            option_id: null
          },
          {
            id: "08c18c83-8159-4222-a197-89b075b6bf9e",
            lang_code: "nl",
            text: "<p>Hoe oud ben je?</p>",
            question_id: 8,
            option_id: null
          },
          {
            id: "51f550f5-0793-44b0-bda1-c74381388665",
            lang_code: "de",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Wie alt bist Du?</span></p>',
            question_id: 8,
            option_id: null
          },
          {
            id: "78b5ee3d-9034-4f4e-8462-c535e06f9712",
            lang_code: "fi",
            text: "<p>Kuinka vanha olet?</p>",
            question_id: 8,
            option_id: null
          },
          {
            id: "1b6323ad-3063-48ef-9c27-98134c75b3bf",
            lang_code: "def",
            text:
              '<p><span style="color: rgb(0, 0, 0);">Wie alt sind Sie?</span></p>',
            question_id: 8,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          only_positive: false,
          whole_number: false
        },
        old_id: 8,
        seq: 13
      },
      {
        front_id: "dde037c1-7ab6-4de1-bddd-e74a891daf0e",
        reference_id: 0,
        question_type_id: 8,
        question_type: {
          title: "Contact",
          logo:
            "https://storage.googleapis.com/mitra-images/landingpage/icons8/icons8-contacts-96.png",
          description:
            "Questionee has to answer with their contact information",
          id: 8,
          component: [],
          settings: [
            {
              title: "Picture Upload",
              name: "additional_info_picture_url",
              type: 2,
              value: "",
              isBaseSetting: false
            },
            {
              title: "Required",
              name: "required",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Description",
              name: "has_description",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "Show reference id",
              name: "show_reference_id",
              type: 0,
              value: false,
              isBaseSetting: true
            },
            {
              title: "First name",
              name: "first_name",
              type: 0,
              value: true,
              isBaseSetting: false
            },
            {
              title: "Last name",
              name: "last_name",
              type: 0,
              value: true,
              isBaseSetting: false
            },
            {
              title: "Address",
              name: "address",
              type: 0,
              value: true,
              isBaseSetting: false
            },
            {
              title: "Phone number",
              name: "phone_number",
              type: 0,
              value: true,
              isBaseSetting: false
            },
            {
              title: "Email",
              name: "email",
              type: 0,
              value: true,
              isBaseSetting: false
            }
          ],
          settingsType: "CONTACT_SETTINGS",
          color: "#D1DEC0"
        },
        answer: "",
        required: false,
        has_description: false,
        not_applicable: false,
        image_url: "user",
        value: "",
        id: "dde037c1-7ab6-4de1-bddd-e74a891daf0e",
        question_theme: null,
        question_theme_id: null,
        show_reference_id: false,
        isNested: false,
        first: false,
        last: false,
        title: "Contact Information",
        wordings: [
          {
            id: "6437aacf-673e-405f-b7ae-36b51b46c746",
            lang_code: "en",
            text:
              '<p>By entering your name and Email address, you agree to the conditions of participation in our raffle. You can find them here: <a href="https://www.mitra-intelligence.com/privacy-policy/eventim-gewinnspiel" target="_blank"><em>Conditions of Participation</em></a></p>',
            question_id: null,
            option_id: null
          },
          {
            id: "8a4afa43-c7fa-4f14-ab07-8acc48a56be1",
            lang_code: "def",
            text:
              '<p>Mit der Angabe Ihres Namens und Ihrer E-Mail-Adresse erklären Sie sich mit den Teilnahmebedingungen für unser Gewinnspiel einverstanden. Diese können Sie unter folgendem Link abrufen: <a href="https://www.mitra-intelligence.com/privacy-policy/eventim-gewinnspiel" target="_blank"><em>Teilnahmebedingungen</em></a></p>',
            question_id: null,
            option_id: null
          }
        ],
        description: [],
        standard_type_id: 2,
        variable_id: 1,
        properties: {
          first_name: true,
          last_name: true,
          address: false,
          phone_number: false,
          email: true
        },
        old_id: 0,
        seq: 14
      }
    ],
    old_id: 60,
    title: "EVENTIM-Webshop Umfrage",
    questionsUsed: {
      "8": 1,
      "12": 1,
      "112": 1,
      "645": 1,
      "646": 3,
      "648": 1,
      "650": 1,
      "651": 1,
      "652": 1,
      "653": 1,
      "716": 1,
      undefined: 1
    },
    randomized_question_order_survey: false,
    logic_jump: [
      {
        ref: "2c76071d-25c8-4f60-950d-4695575a58f4",
        conditions: [
          {
            ref: "2c76071d-25c8-4f60-950d-4695575a58f4",
            op: "=",
            vars: "15adb6ee-4a89-4a16-aeac-59769ed284ec",
            detail: {
              ref: "2c3eb41a-7cb7-4096-a474-781e1111fece"
            }
          },
          {
            ref: "2c76071d-25c8-4f60-950d-4695575a58f4",
            op: "=",
            vars: "bb2d16d9-bb5d-4254-8a6e-886a3411c537",
            detail: {
              ref: "09cb1ad5-49f4-46f6-b7f3-f2d08c23b202"
            }
          }
        ],
        default: {
          ref: "5b466d96-4459-4823-9150-a9047f6ef191"
        }
      }
    ],
    url: "ff9286e5-96cb-485e-ba15-3f9451b3ed36",
    default: false,
    isDeletionAllowed: true,

    logic_jumps: [],
    messages: {
      custom_messages: {
        start_button: [
          {
            lang_code: "de",
            text: "Umfrage Starten"
          },
          {
            lang_code: "en",
            text: "Start Survey"
          },
          {
            lang_code: "nl",
            text: "Start Survey"
          },
          {
            lang_code: "fi",
            text: "Start Survey"
          },
          {
            lang_code: "def",
            text: "Start Survey"
          }
        ],
        next_button: [
          {
            lang_code: "de",
            text: "Next"
          },
          {
            lang_code: "en",
            text: "Next"
          },
          {
            lang_code: "nl",
            text: "Next"
          },
          {
            lang_code: "fi",
            text: "Next"
          },
          {
            lang_code: "def",
            text: "Next"
          }
        ],
        return_button: [
          {
            lang_code: "de",
            text: "Return"
          },
          {
            lang_code: "en",
            text: "Return"
          },
          {
            lang_code: "nl",
            text: "Return"
          },
          {
            lang_code: "fi",
            text: "Return"
          },
          {
            lang_code: "def",
            text: "Return"
          }
        ],
        redirect_text: [
          {
            lang_code: "de",
            text: "You will be redirected in"
          },
          {
            lang_code: "en",
            text: "You will be redirected in"
          },
          {
            lang_code: "nl",
            text: "You will be redirected in"
          },
          {
            lang_code: "fi",
            text: "You will be redirected in"
          },
          {
            lang_code: "def",
            text: "You will be redirected in"
          }
        ],
        contact_block_phone_format_error_text: [
          {
            lang_code: "de",
            text: "This field require only digits"
          },
          {
            lang_code: "en",
            text: "This field require only digits"
          },
          {
            lang_code: "nl",
            text: "This field require only digits"
          },
          {
            lang_code: "fi",
            text: "This field require only digits"
          },
          {
            lang_code: "def",
            text: "This field require only digits"
          }
        ],
        contact_block_email_format_error_text: [
          {
            lang_code: "de",
            text: "This field has a wrong email format"
          },
          {
            lang_code: "en",
            text: "This field has a wrong email format"
          },
          {
            lang_code: "nl",
            text: "This field has a wrong email format"
          },
          {
            lang_code: "fi",
            text: "This field has a wrong email format"
          },
          {
            lang_code: "def",
            text: "This field has a wrong email format"
          }
        ]
      }
    },
    queryKeys: [],
    queryParams: [],
    seconds_counter: null,
    survey_report: {
      showStatistics: true
    }
  };
  queryParamMap: any;
  onSubmitSurvey(data) {
    console.log(data);
  }
}
