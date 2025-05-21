---
title: Shell Scripting
---

# AWS Shell Scripting

1) Stop EC2 Instances by Tag
- Finds and stops all running EC2 instances with a given tag key and value.

<!-- termynal -->

```bash
#!/bin/bash

TAG_KEY="Environment"
TAG_VALUE="Development"

INSTANCE_IDS=$(aws ec2 describe-instances \
  --filters "Name=tag:${TAG_KEY},Values=${TAG_VALUE}" "Name=instance-state-name,Values=running" \
  --query "Reservations[*].Instances[*].InstanceId" \
  --output text)

if [ -z "$INSTANCE_IDS" ]; then
  echo "No running instances found with tag $TAG_KEY=$TAG_VALUE."
  exit 0
fi

echo "Stopping instances: $INSTANCE_IDS"
aws ec2 stop-instances --instance-ids $INSTANCE_IDS
```
