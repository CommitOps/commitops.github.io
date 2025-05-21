---
title: Kubernetes
---

# Kubernetes Questions and Answers


## <a name="Kubernetes-101">Kubernetes 101</a>

???+ question "Q) What are the features of Kubernetes?"
    <p align="center">
      <img src="assets/k8s-features.png" alt="K8s Features" width="800px" />
    </p>

???+ question "Q) How is Kubernetes different from Docker Swarm?"
    - **Docker Swarm** is Docker’s native, open-source container orchestration platform that is used to cluster and schedule Docker containers.
    - **Docker Swarm** is more convenient to set up but doesn’t have a robust cluster, while Kubernetes is more complicated to set up but benefits from a more robust cluster.
    - Docker Swarm can’t do auto-scaling; Kubernetes can.
    - Docker Swarm is faster in scaling but lacks features like GUI, auto-rollbacks, and native monitoring/logging tools that Kubernetes has.
    - Kubernetes supports automatic rollbacks; Docker Swarm does not.

???+ question "Q) How are Kubernetes & Docker related?"
    - Docker is a containerization platform.
    - Kubernetes orchestrates and manages Docker containers at scale.

???+ question "Q) What is the difference between deploying applications on hosts & containers?"
    <p align="center">
      <img src="assets/hosts-containers.png" alt="Hosts Containers" width="800px" />
    </p>
    - Host-based apps share OS libraries.
    - Container-based apps are isolated with only shared kernel.

???+ question "Q) What is Container Orchestration?"
    - It refers to managing multiple containers as one system.
    - It ensures communication, deployment, scaling, and availability of microservices spread across containers.

???+ question "Q) How does Kubernetes simplify containerized Deployment?"
    - Kubernetes abstracts infrastructure complexity.
    - Provides auto-scaling, self-healing, load balancing, and monitoring.
    - It is cloud-agnostic.

???+ question "Q) What do you know about clusters in Kubernetes?"
    <p align="center">
      <img src="assets/k8s-cluster.png" alt="K8s Cluster" width="800px" />
    </p>
    - A Kubernetes cluster has master (API, scheduler) and worker nodes (Kubelet, pods).
    - Desired state is managed via deployment files submitted to the API.

???+ question "Q) What is a Pod in Kubernetes?"
    - A pod is the smallest deployable unit in Kubernetes.
    - It can contain one or more containers.
    ```bash
    kubectl get pods -n <namespace-name>
    ```

???+ question "Q) What is Kubectl?"
    - CLI to interact with Kubernetes API.
    - Used to deploy apps, inspect resources, and troubleshoot.

???+ question "Q) What is Kubelet?"
    - An agent that runs on each node in the cluster.
    - Ensures the containers described in PodSpecs are running.

???+ question "Q) What is etcd?"
    - A distributed key-value store used by Kubernetes.
    - Stores configuration data and state of the cluster.

???+ question "Q) What are the different services within Kubernetes?"
    <p align="center">
      <img src="assets/k8s-services.png" alt="K8s Services" width="800px" />
    </p>

???+ question "Q) What is the role of a pod?"
    - Pods encapsulate containers and provide shared storage, IP, and communication.

???+ question "Q) What is the LoadBalancer in Kubernetes?"
    - Used to expose services externally.
    - Internal LB balances traffic inside the cluster.
    - External LB routes external traffic to the services.

### <a name="ARCHITECTURE BASED QUESTIONS">ARCHITECTURE BASED QUESTIONS</a>

???+ question "Q) What are the different components of Kubernetes Architecture?"
    - Kubernetes architecture is composed of two major components:
      - **Master Node**
      - **Worker Node**

    - **Master Node Components:**
      - `kube-apiserver`: Handles communication within the cluster.
      - `kube-scheduler`: Assigns pods to available worker nodes.
      - `kube-controller-manager`: Maintains the cluster’s desired state.
      - `etcd`: Key-value store for all cluster data.

    - **Worker Node Components:**
      - `kubelet`: Ensures containers are running as specified.
      - `kube-proxy`: Manages networking and communication for pods.

    <p align="center">
      <img src="assets/k8s-arch.png" alt="Kubernetes Architecture Diagram" width="800px" />
    </p>
    
    <p align="center">
      <img src="assets/kubernetes-architecture.png" alt="Kubernetes Architecture Diagram" width="800px" />
    </p>

???+ question "Q) What are the various K8 related services running on nodes and role of each service?"
    - Kubernetes cluster consists of two node types:
      - **Master Nodes**
      - **Executor (Worker) Nodes** (also runs on Master)

    - **Master Node Services:**
      - `kube-apiserver`: Entry point for the Kubernetes cluster (API gateway).
      - `kube-scheduler`: Assigns pods to nodes based on available resources.
      - `kube-controller-manager`: Monitors cluster state and attempts to maintain desired configuration.

    - **Executor Node Services:**
      - `kube-proxy`: Network proxy handling TCP, UDP, and SCTP forwarding.
      - `kubelet`: Ensures pods are running and in healthy state per spec from `kube-apiserver`.

### <a name="Technical Questions">Technical QUESTIONS</a>

???+ question "Q) What is the difference between ConfigMap and Secret? (With examples)"
    - **ConfigMap:** Stores non-sensitive configuration data in plain text format.
    - **Secret:** Stores sensitive information (e.g., passwords) in base64-encoded format.

    **ConfigMap Example:**
    ```bash
    kubectl create configmap myconfigmap --from-literal=env=dev
    ```

    **Secret Example:**
    ```bash
    echo -n 'admin' > ./username.txt
    echo -n 'abcd1234' > ./password.txt
    kubectl create secret generic mysecret --from-file=./username.txt --from-file=./password.txt
    ```

    <p align="center">
      <img src="assets/configmap-secrets.png" alt="ConfigMap vs Secret" width="800px" />
    </p>

???+ question "Q) How to use secrets in Kubernetes?"
    - Secrets are Kubernetes objects used to store encrypted sensitive data such as usernames and passwords.

    **Secret YAML Example:**
    ```yaml
    apiVersion: v1
    kind: Secret
    metadata:
      name: tomcat-pass
    type: Opaque
    data:
      password: <User Password>
      username: <User Name>
    ```

    **Create Secret:**
    ```bash
    kubectl create -f Secret.yaml
    kubectl apply -k .
    ```

???+ question "Q) How to control the resource usage of a POD?"
    - Use `requests` and `limits` in the container spec.

    - **request:** Minimum amount of resources guaranteed.
    - **limit:** Maximum resource usage allowed. Exceeding this may lead to throttling or termination.

    **Example in Pod spec:**
    ```yaml
    resources:
      requests:
        cpu: "250m"
        memory: "64Mi"
      limits:
        cpu: "500m"
        memory: "128Mi"
    ```

???+ question "Q) Recommended way of managing the access to multiple clusters?"
    - Use the Kubernetes config file (usually located at `~/.kube/config`) to store access information for multiple clusters.
    - Use `kubectl config` subcommands to switch between and manage clusters.

    **Examples:**
    ```bash
    kubectl config use-context my-cluster
    kubectl config get-contexts
    ```

???+ question "Q) What is PDB (Pod Disruption Budget)?"
    - A **Pod Disruption Budget (PDB)** ensures a minimum number of pods remain available during voluntary disruptions (e.g., node upgrade).

    - Example:
      - Deployment has 5 replicas.
      - PDB allows 1 pod disruption at a time, meaning at least 4 pods must remain available.

???+ question "Q) How to troubleshoot if the POD is not getting scheduled?"
    - Common causes: Insufficient resources, node selectors, taints, etc.
    - Use the following commands:
      ```bash
      kubectl describe pod <pod-name> -n <namespace>
      kubectl get events
      ```

    - Look for events such as `FailedScheduling` or resource-related errors.

???+ question "Q) What are taints and tolerations?"
    - **Taints:** Set on nodes to prevent certain pods from being scheduled unless they tolerate the taint.
    - **Tolerations:** Allow pods to be scheduled on nodes with matching taints.

    - Useful for workload isolation or reserving nodes for specific teams or services.

    **Example Taint:**
    ```bash
    kubectl taint nodes node1 key=value:NoSchedule
    ```

    **Matching Toleration in Pod:**
    ```yaml
    tolerations:
    - key: "key"
      operator: "Equal"
      value: "value"
      effect: "NoSchedule"
    ```