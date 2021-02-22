---
path: /blogs/gcp-configure-ssl
title: Setup HTTPs for Kubernetes
tags: note, backend, gcp
score: 94
date: 2020-02-22
---

# Setup HTTPs for kubernetes

#05_dev/gcp

1. Register a Domain Name

2. Reserve an External IP address in VPC network->External IP addresses

3. Setting up the managed certificate

```yaml
apiVersion: networking.gke.io/v1
kind: ManagedCertificate
metadata:
    name: certificate-name
spec:
    domains:
        - domain-name1
        - domain-name2
```

4. Create a DNS zone in Cloud DNS
   Add A record and CNAME

5. Create ingress with HTTPs, select the certificate
   Or using config file:

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-name
  annotations:
    kubernetes.io/ingress.global-static-ip-name: address-name
    networking.gke.io/managed-certificates: certificate-name
spec:
  backend:
    serviceName: service-name
    servicePort: service-port
```

6. To verify DNS works, run  
   `dig +trace duomind.org`  
   Or  
   `nslookup duomind.org`

## References

-   [Using Google-managed SSL certificates](https://cloud.google.com/kubernetes-engine/docs/how-to/managed-certs)
-   [Configuring Ingress for external load balancing](https://cloud.google.com/kubernetes-engine/docs/how-to/load-balance-ingress)
-   [Configure DNS on GCP](https://cloud.google.com/dns/docs/tutorials/create-domain-tutorial)
