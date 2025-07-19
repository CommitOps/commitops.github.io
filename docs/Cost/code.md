---

title: Cost Optimization

---

# IAC Cost Patters

## Pattern: Budget
Use budgets to receive alerts about charged and forecasted costs and control spending.

Context
The lack of explicit cost monitoring can often lead to unforeseen and undesirable costs.

Solution
Major cloud providers support the creation of budgets, which allow users to define alerts about charged and forecasted costs and control spending. Having one or more budgets can help monitor and manage the cost of cloud deployments.

Example
Define a budget for a cost limit of 1200 USD for EC2, and generate an email notification if the forecasted monthly cost exceeds this amount:

```json
resource "aws_budgets_budget" "example" {
  name              = "example"
  budget_type       = "COST"
  limit_amount      = "1200"
  limit_unit        = "USD"
  time_unit         = "MONTHLY"

  cost_filter {
    name = "Service"
    values = [
      "Amazon Elastic Compute Cloud - Compute",
    ]
  }

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 100
    threshold_type             = "PERCENTAGE"
    notification_type          = "FORECASTED"
    subscriber_email_addresses = ["test@example.com"]
  }
}
```

## Pattern: Spot instances

Use spot instances to run interruptible workloads for significant cost savings compared to regular instances.

Context
Continuously running compute instances are also continuously billed. Certain types of workloads which can handle interruption, e.g. batch jobs, data analysis and optional tasks, do not require on-demand, provisioned instances.

Solution
Major cloud providers offer excess compute capacity in the form of spot instances. These provide discounts over on-demand compute instances, with the caveat that instances can be preempted or deleted at any time when compute capacity needs to be reclaimed. Users define a price limit and if the spot price falls below this limit, an instance is allocated. If a user's workloads can handle interruptions, spot instances can offer an economical alternative to regular instances.

Example
Use spot instances to run batch jobs: if some of the instances are preempted, the job is slowed down, but it does not completely stop. For example, request a worker at a price of 0.03 USD:

```json
resource "aws_spot_instance_request" "cheap_worker" {
  # ...
  spot_price    = "0.03"
  instance_type = "c4.xlarge"

  tags = {
    Name = "Worker"
  }
}
```