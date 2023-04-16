
## Installation

To deploy this project run

```bash
  npm i nexrender-action-webhook
```


## Usage

```json
{
    "actions": {
        "prerender": [
            {
               "module": "nexrender-action-webhook",
                    "webHookUrl": "WEBHOOK_URL",
                    "webHookSecret": "webhhokSecret",
                    "customData": {
                        "orderId": 45445,
                        "customKey":"custom value"
                    }
            }
        ]
    }
}
```

## Information

- `webHookUrl` should be the URL you wish to send the post request to. It's mandatory.
- `webHookSecret` should be used if you wish to confirm the source of webhook calling. OPTIONAL
- `customData` should be used if you wish to add custom data to the webhook call. OPTIONAL

